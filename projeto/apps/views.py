from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from datetime import datetime
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.exceptions import ValidationError 
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from django.contrib.auth.models import Group
from django.contrib.auth import logout as auth_logout
from django.utils import timezone
from django.db.models import Max
import json

def home(request):
    cafes = Cafe.objects.all()
    return render(request, 'home.html', {'cafes': cafes})

def buscar_cafeterias(request):
    if 'termo' in request.GET:
        termo = request.GET['termo']
        resultados = Cafe.objects.filter(Q(nome_cafeteria__icontains=termo) | Q(descricao__icontains=termo))
        if resultados:
            return render(request, 'resultado_busca.html', {'resultados': resultados, 'termo': termo})
        else:
            mensagem_alerta = f'Nenhuma cafeteria encontrada com o termo "{termo}".'
            return render(request, 'resultado_busca.html', {'mensagem_alerta': mensagem_alerta})
    else:
        return redirect('home')

@login_required
def cadastro_cafeteria(request):
    usuario = request.user
    email = usuario.email

    # Verifique o conteúdo da sessão
    print(f"Conteúdo da sessão: {request.session.items()}")

    print(f"Usuário logado: {usuario.username}, ID: {usuario.id}")
    print(f"Grupos do usuário: {[group.name for group in usuario.groups.all()]}")

    is_empresario = usuario.groups.filter(name='Empresários').exists()
    print(f"Usuário é empresário: {is_empresario}")

    if not is_empresario:
        print("Usuário não está no grupo 'Empresários'.")
        messages.error(request, 'Apenas empresários podem cadastrar cafeterias.')
        return redirect('acesso_negado_cadastrar_cafeteria')

    try:
        user_cliente = UserCliente.objects.get(user=usuario)
        print(f"UserCliente encontrado: {user_cliente}")
    except UserCliente.DoesNotExist:
        print("UserCliente não encontrado.")
        messages.error(request, 'Perfil de usuário não encontrado. Complete seu cadastro.')
        return redirect('cadastro_usuario')

    if request.method == 'POST':
        responsavel = request.POST.get('responsavel')
        nome_cafeteria = request.POST.get('nome_cafeteria')
        endereco = request.POST.get('endereco')
        descricao = request.POST.get('descricao')
        whatsapp = request.POST.get('whatsapp')
        horas_funcionamento = request.POST.get('horas_funcionamento')
        link_redesocial = request.POST.get('link_redesocial', '')
        cnpj = request.POST.get('cnpj')
        site_cafeteria = request.POST.get('site_cafeteria')

        if len(whatsapp) > 13:
            messages.error(request, 'O número de WhatsApp deve ter no máximo 13 dígitos.')
            return render(request, 'cadastro_cafeteria.html', {'form': request.POST})

        if not cnpj.isdigit() or len(cnpj) != 14:
            messages.error(request, 'O CNPJ deve conter apenas números e ter 14 dígitos.')
            return render(request, 'cadastro_cafeteria.html', {'form': request.POST})

        cafe = Cafe(
            responsavel=responsavel,
            nome_cafeteria=nome_cafeteria,
            endereco=endereco,
            descricao=descricao,
            email=email,
            whatsapp=whatsapp,
            horas_funcionamento=horas_funcionamento,
            link_redesocial=link_redesocial,
            cnpj=cnpj,
            site_cafeteria=site_cafeteria,
            empresario=user_cliente
        )

        if 'foto_ambiente' in request.FILES:
            cafe.foto_ambiente = request.FILES['foto_ambiente']

        try:
            cafe.full_clean()
            cafe.save()
        except ValidationError as e:
            messages.error(request, e.message_dict)
            return render(request, 'cadastro_cafeteria.html', {'form': request.POST})

        return redirect('cadastro_cafeteria_sucesso')

    return render(request, 'cadastro_cafeteria.html')


def cadastro_cafeteria_sucesso(request):
    return render(request, 'cadastro_cafeteria_sucesso.html')

def cadastro_user_sucesso(request):
    return render(request, 'cadastro_user_sucesso.html')

@login_required
def cancelar_reserva(request, reserva_id):
    reserva = get_object_or_404(ReservaCafe, id=reserva_id, cliente__email=request.user.email)

    if request.method == 'POST':
        reserva.delete()
        messages.success(request, 'Reserva cancelada com sucesso.')
        return redirect('minhas_reservas')
    
    return render(request, 'apps/cancelar_reserva.html', {'reserva': reserva})

@login_required
def criar_reserva(request, cafe_id):
    cafe = get_object_or_404(Cafe, id=cafe_id)
    cliente = get_object_or_404(UserCliente, email=request.user.email)
    
    if request.method == 'POST':
        nome = request.POST.get('nome')
        data_reserva = request.POST.get('data_reserva')
        horario_reserva = request.POST.get('horario_reserva')
        numero_de_pessoas = int(request.POST.get('numero_de_pessoas', 1))
        observacao = request.POST.get('observacao', '')

        if not nome or not data_reserva or not horario_reserva:
            return render(request, 'reservar_cafe.html', {
                'cafe': cafe,
                'error_message': 'Por favor, preencha todos os campos obrigatórios.'
            })

        try:
            data_reserva = datetime.strptime(data_reserva, '%Y-%m-%d').date()
            horario_reserva = datetime.strptime(horario_reserva, '%H:%M').time()
        except ValueError:
            return render(request, 'reservar_cafe.html', {
                'cafe': cafe,
                'error_message': 'Formato de data ou horário inválido.'
            })

        today_date = datetime.today().date()
        if data_reserva < today_date:
            return render(request, 'reservar_cafe.html', {
                'cafe': cafe,
                'error_message': 'A data selecionada deve ser futura.'
            })

        if numero_de_pessoas <= 0:
            return render(request, 'reservar_cafe.html', {
                'cafe': cafe,
                'error_message': 'O número de pessoas deve ser maior que zero.'
            })

        reservas_conflitantes = ReservaCafe.objects.filter(
            cafe=cafe,
            data_reserva=data_reserva,
            horario_reserva=horario_reserva
        )

        if reservas_conflitantes.exists():
            return render(request, 'reservar_cafe.html', {
                'cafe': cafe,
                'error_message': 'Café já reservado para o horário solicitado!'
            })

        reserva = ReservaCafe(
            cafe=cafe,
            cliente=cliente,
            data_reserva=data_reserva,
            horario_reserva=horario_reserva,
            numero_de_pessoas=numero_de_pessoas,
            observacao=observacao
        )
        reserva.save()
        
        messages.success(request, 'Reserva efetuada com sucesso.')
        return redirect('minhas_reservas')
    
    else:
        reservas = ReservaCafe.objects.filter(cafe=cafe).values('data_reserva', 'horario_reserva')
        horarios_reservados = {}
        for reserva in reservas:
            data_str = reserva['data_reserva'].strftime('%Y-%m-%d')
            horario_str = reserva['horario_reserva'].strftime('%H:%M')
            if data_str not in horarios_reservados:
                horarios_reservados[data_str] = []
            horarios_reservados[data_str].append(horario_str)

        return render(request, 'reservar_cafe.html', {
            'cafe': cafe,
            'horarios_reservados_json': json.dumps(horarios_reservados)
        })

def detalhes_anonimo(request, cafe_id):
        cafe = get_object_or_404(Cafe, id=cafe_id)
        detalhes_cafe = cafe.detalhes()
        return render(request, 'detalhes.html', {'cafe': cafe, 'detalhes_cafe': detalhes_cafe})

@login_required
def editar_reserva(request, reserva_id):
    reserva = get_object_or_404(ReservaCafe, id=reserva_id)
    cafe = reserva.cafe
    
    if request.method == 'POST':
        nome_cliente = request.POST.get('nome')
        data_reserva = request.POST.get('data_reserva')
        horario_reserva = request.POST.get('horario_reserva')
        numero_de_pessoas = int(request.POST.get('numero_de_pessoas', 1))
        observacao = request.POST.get('observacao', '')

        if not data_reserva or not horario_reserva:
            return render(request, 'editar_reserva.html', {
                'reserva': reserva,
                'error_message': 'Por favor, preencha todos os campos obrigatórios.'
            })

        try:
            data_reserva = datetime.strptime(data_reserva, '%Y-%m-%d').date()
            horario_reserva = datetime.strptime(horario_reserva, '%H:%M').time()
        except ValueError:
            return render(request, 'editar_reserva.html', {
                'reserva': reserva,
                'error_message': 'Formato de data ou horário inválido.'
            })

        today_date = datetime.today().date()
        if data_reserva < today_date:
            return render(request, 'editar_reserva.html', {
                'reserva': reserva,
                'error_message': 'A data selecionada deve ser futura.'
            })

        if numero_de_pessoas <= 0:
            return render(request, 'editar_reserva.html', {
                'reserva': reserva,
                'error_message': 'O número de pessoas deve ser maior que zero.'
            })

        reservas_conflitantes = ReservaCafe.objects.filter(
            cafe=cafe,
            data_reserva=data_reserva,
            horario_reserva=horario_reserva
        ).exclude(id=reserva.id)

        if reservas_conflitantes.exists():
            return render(request, 'editar_reserva.html', {
                'reserva': reserva,
                'error_message': 'Café já reservado para o horário solicitado!'
            })

        reserva.data_reserva = data_reserva
        reserva.horario_reserva = horario_reserva
        reserva.numero_de_pessoas = numero_de_pessoas
        reserva.observacao = observacao
        reserva.save()
        
        messages.success(request, 'Reserva atualizada com sucesso.')
        return redirect('minhas_reservas')
    
    return render(request, 'editar_reserva.html', {
        'reserva': reserva
    })

@login_required
def enviar_whatsapp(request, cafe_id):
    cafeteria = get_object_or_404(Cafe, pk=cafe_id)
    if cafeteria.whatsapp:
        whatsapp_url = f"https://wa.me/{cafeteria.whatsapp}"
        return redirect(whatsapp_url)
    else:
        messages.error(request, "Número de WhatsApp não disponível.")
        return HttpResponseRedirect(reverse('perfil_cafeteria', args=[cafe_id]))

def enviar_email(request, cafe_id):
    cafeteria = get_object_or_404(Cafe, pk=cafe_id)
    if request.method == 'POST':
        mensagem = request.POST.get('mensagem', '')
        send_mail(
            'Mensagem do MyCafeApp',
            mensagem,
            'from@example.com',
            [cafeteria.email],
            fail_silently=False,
        )
        messages.success(request, "Email enviado com sucesso!")
        return render(request, 'email_enviado.html', {'cafeteria': cafeteria})
    return render(request, 'enviar_email.html', {'cafeteria': cafeteria})

@login_required
def excluir_reserva(request, reserva_id):
    reserva = get_object_or_404(ReservaCafe, id=reserva_id)
    
    if request.method == 'POST':
        reserva.delete()
        messages.success(request, 'Reserva excluída com sucesso.')
        return redirect('minhas_reservas')
    
    return render(request, 'excluir_reserva.html', {
        'reserva': reserva
    })

@login_required
def favoritar(request, cafe_id):
    cafe = get_object_or_404(Cafe, id=cafe_id)
    
    if request.method == 'POST' or request.method == 'GET':
        usuario = request.user
        
        favorito_existente = Favorito.objects.filter(usuario=usuario, cafe=cafe).exists()
        
        if not favorito_existente:
            Favorito.objects.create(usuario=usuario, cafe=cafe)
            messages.success(request, 'Cafeteria favoritada com sucesso!')
        else:
            favorito = Favorito.objects.filter(usuario=usuario, cafe=cafe).first()
            favorito.delete()  # Remove o favorito se existir
            messages.success(request, 'Cafeteria removida dos favoritos.')
        
        return redirect('favoritos')
    
    return redirect('home')


@login_required
def lista_favoritos(request):
    if request.user.is_authenticated:
        favoritos = Favorito.objects.filter(usuario=request.user)
        return render(request, 'favoritos.html', {'favoritos': favoritos})
    else:
        return redirect('login')
    
@login_required
def registrar_historico(request, cafe_id): 
    cafe = get_object_or_404(Cafe, id=cafe_id)
    
    usuario = request.user
    # Evita múltiplas entradas no mesmo dia
    visita_hoje = Historico.objects.filter(usuario=usuario, cafe=cafe, visited_at__date=timezone.now().date()).exists()
    
    if not visita_hoje:
        Historico.objects.create(usuario=usuario, cafe=cafe)
        messages.success(request, 'Visita registrada no histórico!')

    return redirect('cafe_detalhes', cafe_id=cafe.id)

@login_required
def lista_historico(request):
    if request.user.is_authenticated:
        historico = Historico.objects.filter(usuario=request.user).order_by('-visited_at')
        return render(request, 'historico.html', {'historico': historico})
    else:
        return redirect('login')
    
@login_required
def detalhes(request, cafe_id):
    cafe = get_object_or_404(Cafe, id=cafe_id)
    usuario = request.user
    favorito = Favorito.objects.filter(usuario=usuario, cafe=cafe).exists()
    detalhes_cafe = cafe.detalhes()

    today = timezone.localdate()

    visita_hoje = Historico.objects.filter(
        usuario=usuario, 
        cafe=cafe, 
        visited_at__date=today
    ).exists()

    if not visita_hoje:
        Historico.objects.create(usuario=usuario, cafe=cafe, visited_at=timezone.now())
        messages.success(request, 'Visita registrada no histórico!')

    return render(request, 'detalhes.html', {'cafe': cafe, 'detalhes_cafe': detalhes_cafe, 'favorito': favorito})
    
def limpar_historico_duplicado():
    # Encontrar a última visita para cada usuário e cafeteria por dia
    ultimas_visitas = Historico.objects.values('usuario_id', 'cafe_id', 'visited_at__date').annotate(
        ultima_visita=Max('visited_at')
    )

    # Converter resultados em uma lista de IDs de visitas para manter
    ids_para_manter = [visita['ultima_visita'] for visita in ultimas_visitas]

    # Excluir todas as visitas que não estão na lista de IDs para manter
    Historico.objects.exclude(id__in=ids_para_manter).delete()

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        try:
            username = User.objects.get(email=email).username
        except ObjectDoesNotExist:
            return render(request, 'login.html', {'error': 'Usuário não encontrado'})

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if user.groups.filter(name='Empresários').exists():
                return redirect('pagina_empresario')
            else: 
                return redirect('home')
        else:
            return render(request, 'login.html', {'error': 'Usuário ou senha inválidos'})
        
    return render(request, 'login.html')
# alterar 'pagina_empresario' para o redirecionamento correto ^

def logout(request):
    auth_logout(request)
    if "usuario" in request.session:
        del request.session["usuario"]
    request.session.flush()
    return redirect('home')

@login_required
def minhas_reservas(request):
    try:
        cliente = UserCliente.objects.get(email=request.user.email)
    except UserCliente.DoesNotExist:
        return redirect('login')

    reservas = ReservaCafe.objects.filter(cliente=cliente)
    return render(request, 'minhas_reservas.html', {'reservas': reservas})

def perfil_cafeteria(request, cafe_id):
    cafeteria = get_object_or_404(Cafe, pk=cafe_id)
    return render(request, 'perfil_cafeteria.html', {'cafeteria': cafeteria})

def UserCadastro(request):
    if request.method == 'POST':
        username = request.POST['username']
        name = request.POST['name']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST.get('confirm_password')
        is_business = request.POST.get('is_business') == 'on'

        if password != confirm_password:
                messages.error(request, 'As senhas não correspondem.')
                return render(request, 'cadastro_usuario.html', {'form': request.POST})
        
        if User.objects.filter(username=username).exists():
            return render(request, 'cadastro_usuario.html', {"erro": "Usuário já existe"})
        if User.objects.filter(email=email).exists():
            return render(request, 'cadastro_usuario.html', {"erro": "Email já cadastrado"})

        user = User.objects.create_user(username=username, password=password, email=email, first_name=name)

        if is_business:
            empresario_group = Group.objects.get(name='Empresários')
            user.groups.add(empresario_group)

        user_cliente = UserCliente(user=user, nome_completo=name, email=email, is_business=is_business)
        user_cliente.save()

        login(request, user)
        request.session["usuario"] = email

        if is_business:
            return redirect('cadastro_empresario_sucesso') 
        else:
            return redirect('cadastro_user_sucesso')
        
    return render(request, 'cadastro_usuario.html')

@login_required
def cadastro_empresario_sucesso(request):
    return render(request, 'cadastro_empresario_sucesso.html')

@login_required
def cafeterias_empresarios(request):
    usuario = request.user
    cafeterias = Cafe.objects.filter(email=usuario.email)
    return render(request, 'cafeterias_empresarios', {'cafeterias': cafeterias}) 

# modelo acima criado p exibir cafeterias cadastradas pelo empresario, para ele poder visualizar suas cafeterias, só criei a base 

@login_required
def pagina_empresario(request):
    return render(request, 'pagina_empresario.html')

def acesso_negado_cadastrar_cafeteria(request):
    return render(request, 'acesso_negado_cadastrar_cafeteria.html')