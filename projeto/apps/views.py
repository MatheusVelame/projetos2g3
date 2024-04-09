from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django.http import HttpResponse, HttpResponseRedirect
# from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.urls import reverse

# Create your views here.
def home(request):
    return HttpResponse("Hello, world. You're at the project index.")

def login_view(request):
    title = "Login"
    next_url = request.GET.get('next', '')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(next_url or 'home')
        else:
            return render(request, 'apps/login.html', {"erro": "Usuário não encontrado"})
    return render(request, 'apps/login.html', {'next': next_url})

def logout(request):
    logout(request)
    if "usuario" in request.session:
        del request.session["usuario"]
    return redirect(home)
