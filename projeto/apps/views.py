from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from .models import Cafe
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.exceptions import ValidationError 
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ObjectDoesNotExist



# Create your views here.
def home(request):
    cafes = Cafe.objects.all()
    return render(request, 'home.html', {'cafes': cafes})

def detalhes(request, cafe_id):
    cafe = get_object_or_404(Cafe, id=cafe_id)
    usuario = request.user
    favorito = Favorito.objects.filter(usuario=usuario, cafe=cafe).exists()
    detalhes_cafe = cafe.detalhes()
    return render(request, 'detalhes.html', {'cafe': cafe, 'detalhes_cafe': detalhes_cafe, 'favorito':favorito})

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
        email = request.POST.get('email')  # Pega o email do formulário
        password = request.POST.get('password')
        
        try:
            # Encontrar o username correspondente ao email fornecido
            username = User.objects.get(email=email).username
        except ObjectDoesNotExist:
            # Se não encontrar o usuário pelo email, retornar erro
            return render(request, 'login.html', {'error': 'Usuário não encontrado'})
        
        # Autenticar usando o username encontrado e a senha fornecida
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # Certifique-se de que 'home' é o nome correto da URL de destino
        else:
            # Se a autenticação falhar, retornar para a página de login com erro
            return render(request, 'login.html', {'error': 'Usuário ou senha inválidos'})
    
    return render(request, 'login.html')  # Renderizar a página de login se não for POST


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

def perfil_cafeteria(request, cafe_id):
    cafeteria = get_object_or_404(Cafe, pk=cafe_id)
    return render(request, 'perfil_cafeteria.html', {'cafeteria': cafeteria})

def logout(request):
    logout(request)
    if "usuario" in request.session:
        del request.session["usuario"]
    return redirect(home)

def cadastro_cafeteria(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        confirmar_senha = request.POST.get('confirmar_senha')

        if senha != confirmar_senha:
            messages.error(request, 'As senhas não correspondem.')
            return render(request, 'cadastro_cafeteria.html', {'form': request.POST})

        if User.objects.filter(username=email).exists():
            messages.error(request, 'Este email já está cadastrado.')
            return render(request, 'cadastro_cafeteria.html', {'form': request.POST})

        senha_criptografada = make_password(senha)
        responsavel = request.POST.get('responsavel')
        nome_cafeteria = request.POST.get('nome_cafeteria')
        endereco = request.POST.get('endereco')
        descricao = request.POST.get('descricao')
        whatsapp = request.POST.get('whatsapp')
        horas_funcionamento = request.POST.get('horas_funcionamento')
        link_redesocial = request.POST.get('link_redesocial', '')
        cnpj = request.POST.get('cnpj')
        site_cafeteria = request.POST.get('site_cafeteria')

        # Criação do usuário
        user = User.objects.create_user(username=email, password=senha, email=email, first_name=responsavel)
        login(request, user)
        request.session["usuario"] = email  # Usando email como identificador na sessão

        # Criação da cafeteria
        cafe = Cafe(
            responsavel=responsavel,
            nome_cafeteria=nome_cafeteria,
            endereco=endereco,
            descricao=descricao,
            email=email,
            whatsapp=whatsapp,
            horas_funcionamento=horas_funcionamento,
            link_redesocial=link_redesocial,
            senha=senha_criptografada,
            cnpj=cnpj,
            site_cafeteria=site_cafeteria,
        )

        if 'foto_ambiente' in request.FILES:
            cafe.foto_ambiente = request.FILES['foto_ambiente']

        try:
            cafe.full_clean()
            cafe.save()
        except ValidationError as e:
            messages.error(request, e.message_dict)
            return render(request, 'cadastro_cafeteria.html', {'form': request.POST})

            return redirect('cadastro_cafeteria_sucesso')  # Supondo que 'home' é a URL de sucesso

    return render(request, 'cadastro_cafeteria.html')

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

def cadastro_cafeteria_sucesso(request):
    return render(request, 'cadastro_cafeteria_sucesso.html')

def cadastro_user_sucesso(request):
    return render(request, 'cadastro_user_sucesso.html')