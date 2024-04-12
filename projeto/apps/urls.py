from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('favoritos/', views.lista_favoritos, name='favoritos'),
    path('favoritar/<int:cafe_id>', views.favoritar, name='favoritar'),
    path('login/', auth_views.LoginView.as_view(template_name='apps/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]