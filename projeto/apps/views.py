from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from datetime import datetime
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.exceptions import ValidationError 
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from django.contrib.auth.models import Group

# Create your views here.
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

from django.contrib import messages
from django.contrib.auth.models import Group
from .models import Cafe

@login_required
def cadastro_cafeteria(request):
    if request.method == 'POST':
        usuario = request.user
        email = usuario.email 

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

        is_empresario = False
        if usuario.groups.filter(name='Empresários').exists():
            is_empresario = True

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
        )

        if 'foto_ambiente' in request.FILES:
            cafe.foto_ambiente = request.FILES['foto_ambiente']

        try:
            cafe.full_clean()
            cafe.save()
            empresario_group = Group.objects.get(name='Empresários')
            usuario.groups.add(empresario_group)
            is_empresario = True
        except ValidationError as e:
            messages.error(request, e.message_dict)
            return render(request, 'cadastro_cafeteria.html', {'form': request.POST})

        if is_empresario:
            return redirect('pagina_empresario') 
        else:
            return redirect('pagina_cliente') 

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
        data_reserva = request.POST.get('data_reserva')
        horario_reserva = request.POST.get('horario_reserva')
        numero_de_pessoas = int(request.POST.get('numero_de_pessoas', 1))

        if not data_reserva or not horario_reserva:
            return render(request, 'reservar_cafe.html', {'cafe': cafe, 'error_message': 'Por favor, preencha a data e horário da reserva.'})

        try:
            data_reserva = datetime.strptime(data_reserva, '%Y-%m-%d').date()
            horario_reserva = datetime.strptime(horario_reserva, '%H:%M').time()
        except ValueError:
            return render(request, 'reservar_cafe.html', {'cafe': cafe, 'error_message': 'Formato de data ou horário inválido.'})

        today_date = datetime.today().date()
        if data_reserva < today_date:
            return render(request, 'reservar_cafe.html', {'cafe': cafe, 'error_message': 'A data selecionada deve ser futura.'})

        if numero_de_pessoas <= 0:
            return render(request, 'reservar_cafe.html', {'cafe': cafe, 'error_message': 'O número de pessoas deve ser maior que zero.'})

        reservas_conflitantes = ReservaCafe.objects.filter(
            cafe=cafe,
            data_reserva=data_reserva,
            horario_reserva=horario_reserva
        )

        if reservas_conflitantes.exists():
            return render(request, 'reservar_cafe.html', {'cafe': cafe, 'error_message': 'Café já reservado para o horário solicitado!'})

        reserva = ReservaCafe(
            cafe=cafe,
            cliente=cliente,
            data_reserva=data_reserva,
            horario_reserva=horario_reserva,
            numero_de_pessoas=numero_de_pessoas
        )
        reserva.save()
        
        messages.success(request, 'Reserva efetuada com sucesso.')
        return redirect('minhas_reservas')
    
    else:
        return render(request, 'reservar_cafe.html', {'cafe': cafe})

def detalhes(request, cafe_id):
    if request.user.is_authenticated:
        cafe = get_object_or_404(Cafe, id=cafe_id)
        usuario = request.user
        favorito = Favorito.objects.filter(usuario=usuario, cafe=cafe).exists()
        detalhes_cafe = cafe.detalhes()
        return render(request, 'detalhes.html', {'cafe': cafe, 'detalhes_cafe': detalhes_cafe, 'favorito':favorito})
    else:
        cafe = get_object_or_404(Cafe, id=cafe_id)
        detalhes_cafe = cafe.detalhes()
        return render(request, 'detalhes.html', {'cafe': cafe, 'detalhes_cafe': detalhes_cafe})

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
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': 'Usuário ou senha inválidos'})
    return render(request, 'login.html')

def logout(request):
    logout(request)
    if "usuario" in request.session:
        del request.session["usuario"]
    return redirect(home)

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

        if password != confirm_password:
                messages.error(request, 'As senhas não correspondem.')
                return render(request, 'cadastro_usuario.html', {'form': request.POST})
        
        if User.objects.filter(username=username).exists():
            return render(request, 'cadastro_usuario.html', {"erro": "Usuário já existe"})
        if User.objects.filter(email=email).exists():
            return render(request, 'cadastro_usuario.html', {"erro": "Email já cadastrado"})

        user = User.objects.create_user(username=username, password=password, email=email, first_name=name)
        login(request, user)
        request.session["usuario"] = email
        return redirect('cadastro_user_sucesso')
        
    return render(request, 'cadastro_usuario.html')
