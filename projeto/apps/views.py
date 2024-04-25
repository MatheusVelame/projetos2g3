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
from django.db.utils import IntegrityError
from django.contrib.auth.hashers import make_password



# Create your views here.
def home(request):
    cafes = Cafe.objects.all()
    return render(request, 'home.html', {'cafes': cafes})

def detalhes(request, cafe_id):
    cafe = get_object_or_404(Cafe, id=cafe_id)
    detalhes_cafe = cafe.detalhes()
    return render(request, 'detalhes.html', {'cafe': cafe, 'detalhes_cafe': detalhes_cafe})

# @login_required
def favoritar(request, cafe_id):
    cafe = get_object_or_404(Cafe, id=cafe_id)
    
    if request.method == 'POST' or request.method == 'GET':
        usuario = request.user
        
        favorito_existente = Favorito.objects.filter(usuario=usuario, cafe=cafe).exists()
        
        if not favorito_existente:
            Favorito.objects.create(usuario=usuario, cafe=cafe)
            messages.success(request, 'Cafeteria favoritada com sucesso!')
            return HttpResponseRedirect(reverse('detalhes', args=[cafe_id]))
        else:
            favorito = Favorito.objects.filter(usuario=usuario, cafe=cafe).first()
            favorito.delete()  # Remove o favorito se existir
            messages.success(request, 'Cafeteria removida dos favoritos.')
            # return redirect('reverse('detalhes', args=[cafe_id])')
            return redirect('home')
        
    # return HttpResponseRedirect(reverse('detalhes', args=[cafe_id]))
    return redirect('home')

# @login_required
def lista_favoritos(request):
    # if request.user.is_authenticated:
    favoritos = Favorito.objects.all() # .filter(usuario=request.user)
    return render(request, 'favoritos.html', {'favoritos': favoritos})
    # else:
    #     return redirect('login')

def login_view(request):
    title = "Login"
    next_url = request.GET.get('next', '')
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect(next_url or 'home')
        else:
            return render(request, 'apps/login.html', {"erro": "Usuário não encontrado"})
    return render(request, 'apps/login.html', {'next': next_url})

# @login_required
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
        senha = request.POST.get('senha')
        confirmar_senha = request.POST.get('confirmar_senha')

        if senha != confirmar_senha:
            messages.error(request, 'As senhas não correspondem.')
            form_data = request.POST.copy()
            form_data['senha'] = ''
            form_data['confirmar_senha'] = ''
            return render(request, 'cadastro_cafeteria.html', {'form': form_data})

        senha_criptografada = make_password(senha)

        responsavel = request.POST.get('responsavel')
        nome_cafeteria = request.POST.get('nome_cafeteria')
        endereco = request.POST.get('endereco')
        descricao = request.POST.get('descricao')
        email = request.POST.get('email')
        whatsapp = request.POST.get('whatsapp')
        horas_funcionamento = request.POST.get('horas_funcionamento')
        link_redesocial = request.POST.get('link_redesocial', '')
        cnpj = request.POST.get('cnpj')
        site_cafeteria = request.POST.get('site_cafeteria')

        if Cafe.objects.filter(email=email).exists():
            messages.error(request, 'Este email já está cadastrado.')
            form_data = request.POST.copy()
            form_data['senha'] = ''  # Limpa a senha por questões de segurança
            return render(request, 'cadastro_cafeteria.html', {'form': form_data})

        cafe = Cafe(
            responsavel=responsavel,
            nome_cafeteria=nome_cafeteria,
            endereco=endereco,
            descricao=descricao,
            email=email,
            whatsapp=whatsapp,
            horas_funcionamento=horas_funcionamento,
            link_redesocial=link_redesocial,
            senha=senha_criptografada,  # Usa a senha criptografada
            cnpj=cnpj,
            site_cafeteria=site_cafeteria,
        )

        if 'foto_ambiente' in request.FILES:
            cafe.foto_ambiente = request.FILES['foto_ambiente']

        try:
            cafe.full_clean()
            cafe.save()
            return redirect('cadastro_cafeteria_sucesso')
        except ValidationError as e:
            form_data = request.POST.copy()
            form_data['senha'] = ''
            form_data['confirmar_senha'] = ''
            return render(request, 'cadastro_cafeteria.html', {'errors': e.message_dict, 'form': form_data})

    return render(request, 'cadastro_cafeteria.html')


def UserCadastro(request):
    if request.method == 'POST':
        
        nome_completo = request.POST.get('nome_completo')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password != confirm_password:
                messages.error(request, 'As senhas não correspondem.')
                return render(request, 'cadastro_usuario.html')

        if UserCliente.objects.filter(email=email).exists():
            messages.error(request, 'Email já existe.')
            return render(request, 'cadastro_usuario.html')

        user = UserCliente(
            nome_completo=nome_completo,
            email=email,
            password=password
        )
        user.save()
        messages.success(request, 'Cadastro realizado com sucesso!')
        return redirect('home') 

    return render(request, 'cadastro_usuario.html')

def cadastro_cafeteria_sucesso(request):
    return render(request, 'cadastro_cafeteria_sucesso.html')