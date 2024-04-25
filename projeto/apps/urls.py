from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from .views import *

urlpatterns = [
    path('', views.home, name = 'home'),
    path('cadastro_cafeteria/', views.cadastro_cafeteria, name='cadastro_cafeteria'),
    path('UserCadastro/',views.UserCadastro, name='UserCadastro'),
    path('cafeteria/<int:cafe_id>/enviar-email/', enviar_email, name='enviar-email'),
    path('cafeteria/<int:cafe_id>/', perfil_cafeteria, name='perfil-cafeteria'),
    path('cafeteria/<int:cafe_id>/whatsapp/', enviar_whatsapp, name='enviar_whatsapp'),
    path('detalhes/<int:cafe_id>/', views.detalhes, name='detalhes'),
    path('favoritos/', views.lista_favoritos, name='favoritos'),
    path('favoritar/<int:cafe_id>', views.favoritar, name='favoritar'),
    path('login/', login_view, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('cadastro_cafeteria_sucesso/', views.cadastro_cafeteria_sucesso, name='cadastro_cafeteria_sucesso'),
]