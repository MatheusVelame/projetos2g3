from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

# Create your models here.

# quem tiver com essa ponta de cadastro das cafeterias pode elaborar o model abaixo, só tô colocando um pontapé pra conseguir fazer o model "Favorito"
class Cafe(models.Model):
    nome = models.CharField(max_length=100, blank=False, default='Nome não informado')
    endereco = models.CharField(max_length=100, blank=False, default='Endereço não informado')
    descricao = models.TextField(blank=False, default='Descrição não informada')
    email = models.EmailField(default="default@example.com")
    whatsapp = models.CharField(max_length=15, default='5500000000000')
    horas_funcionamento = models.CharField(max_length=100, blank=False, default='Horário não informado')
    link_redesocial = models.URLField(max_length=200, blank=True)
    foto_ambiente = models.ImageField(upload_to='fotos_cafeterias/', blank=True, null=True)
    ticket_medio = models.DecimalField(max_digits=6, decimal_places=2, blank=False, default=0.0)

    def __str__(self):
        return self.nome 

class Favorito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.usuario.username} - {self.cafe.nome}'
    
class UserCliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)  # Garante que cada cadastro tenha um User associado
    nome = models.CharField(max_length=100)
    senha = models.CharField(max_length=11, unique=True, validators=[RegexValidator(r'^\d{11}$', 'CPF deve ter 11 dígitos, somente números')])
    email = models.EmailField(unique=True)
    whatsapp = models.CharField(max_length=15, default='5500000000000')

    def __str__(self):
        return f"{self.nome} ({self.user.username if self.user else 'Sem usuário'})"

    class Meta:
        verbose_name = "Cadastro"
        verbose_name_plural = "Cadastros" 
    