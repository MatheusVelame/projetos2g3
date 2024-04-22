from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from .views import perfil_cafeteria, enviar_email, enviar_whatsapp

urlpatterns = [
    path('', views.home, name = 'home'),
    path('favoritos/', views.lista_favoritos, name='favoritos'),
    path('favoritar/<int:cafe_id>', views.favoritar, name='favoritar'),
    path('login/', auth_views.LoginView.as_view(template_name='apps/login.html'), name='login'),
    path('cafeteria/<int:cafe_id>/', perfil_cafeteria, name='perfil-cafeteria'),
    path('cafeteria/<int:cafe_id>/whatsapp/', enviar_whatsapp, name='enviar_whatsapp'),
    path('cafeteria/<int:cafe_id>/enviar-email/', enviar_email, name='enviar-email'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),

]