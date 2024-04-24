from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

# Create your models here.

# quem tiver com essa ponta de cadastro das cafeterias pode elaborar o model abaixo, só tô colocando um pontapé pra conseguir fazer o model "Favorito"
class Cafe(models.Model):
    responsavel = models.CharField(max_length=100, blank=False, default='Nome do responsável não informado')
    nome_cafeteria = models.CharField(max_length=100, blank=False, default='Nome não informado')
    endereco = models.CharField(max_length=100, blank=False, default='Endereço não informado')
    descricao = models.TextField(blank=False, default='Descrição não informada')
    email = models.EmailField(unique=True,default="default@example.com")
    whatsapp = models.CharField(max_length=15, default='5500000000000')
    horas_funcionamento = models.CharField(max_length=100, blank=False, default='Horário não informado')
    link_redesocial = models.URLField(max_length=200, blank=True)
    foto_ambiente = models.ImageField(upload_to='fotos_cafeterias/', blank=True, null=True)
    senha = models.CharField(max_length=128, default='0000')
    cnpj = models.CharField(max_length=14, unique=True, default='00000000000000')
    site_cafeteria = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.nome_cafeteria

    def detalhes(self):
        return {
            'responsavel': self.responsavel,
            'nome_cafeteria': self.nome_cafeteria,
            'endereco': self.endereco,
            'descricao': self.descricao,
            'email': self.email,
            'whatsapp': self.whatsapp,
            'horas_funcionamento': self.horas_funcionamento,
            'link_redesocial': self.link_redesocial,
            'foto_ambiente': self.foto_ambiente.url if self.foto_ambiente else None,
            'senha': self.senha,
            'confirmar_senha': self.confirmar_senha,
            'cnpj': self.cnpj,
        }

class Favorito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE)

    def detalhes(self):
        return {
            'nome': self.nome,
            'endereco': self.endereco,
            'descricao': self.descricao,
            'email': self.email,
            'whatsapp': self.whatsapp,
            'horas_funcionamento': self.horas_funcionamento,
            'link_redesocial': self.link_redesocial,
            'foto_ambiente': self.foto_ambiente.url if self.foto_ambiente else None,
            'ticket_medio': str(self.ticket_medio)
        }

    def __str__(self):
        return f'{self.usuario.username} - {self.cafe.nome}'
    
class UserCliente(models.Model):
    username = models.CharField(max_length=150, unique=True, null=True)
    nome_completo = models.CharField(max_length=150, default="Desconhecido")
    cpf = models.CharField(max_length=11, unique=True, default=00000000000, validators=[RegexValidator(r'^\d{11}$', 'CPF deve ter 11 dígitos.')])
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.username