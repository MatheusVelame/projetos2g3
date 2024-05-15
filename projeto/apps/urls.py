from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from .views import *

urlpatterns = [
    path('', views.home, name = 'home'),
    path('cadastro_cafeteria/', views.cadastro_cafeteria, name='cadastro_cafeteria'),
    path('cadastro_cafeteria_sucesso/', views.cadastro_cafeteria_sucesso, name='cadastro_cafeteria_sucesso'),
    path('cadastro_user_sucesso/', views.cadastro_user_sucesso, name='cadastro_user_sucesso'),
    path('cafeteria/<int:cafe_id>/enviar-email/', enviar_email, name='enviar-email'),
    path('cafeteria/<int:cafe_id>/', perfil_cafeteria, name='perfil-cafeteria'),
    path('cafeteria/<int:cafe_id>/whatsapp/', enviar_whatsapp, name='enviar_whatsapp'),
    path('cancelar_reserva/<int:reserva_id>/', cancelar_reserva, name='cancelar_reserva'),
    path('detalhes/<int:cafe_id>/', views.detalhes, name='detalhes'),
    path('favoritos/', views.lista_favoritos, name='favoritos'),
    path('favoritar/<int:cafe_id>', views.favoritar, name='favoritar'),
    path('login/', login_view, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('minhas_reservas/', minhas_reservas, name='minhas_reservas'),
    path('reservar_cafe/<int:cafe_id>/', criar_reserva, name='criar_reserva'),
    path('UserCadastro/',views.UserCadastro, name='UserCadastro'),
    path('buscar-cafeterias/', views.buscar_cafeterias, name='buscar_cafeterias'),
]