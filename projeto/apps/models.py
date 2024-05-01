from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

class Cafe(models.Model):
    responsavel = models.CharField(max_length=100, blank=False, default='Nome do responsável não informado')
    nome_cafeteria = models.CharField(max_length=100, blank=False, default='Nome não informado')
    endereco = models.CharField(max_length=100, blank=False, default='Endereço não informado')
    descricao = models.TextField(blank=False, default='Descrição não informada')
    email = models.EmailField(unique=True,default="default@example.com")
    whatsapp = models.CharField(max_length=13, default='5500000000000')
    horas_funcionamento = models.CharField(max_length=100, blank=False, default='Horário não informado')
    link_redesocial = models.URLField(max_length=200, blank=True)
    foto_ambiente = models.ImageField(upload_to='fotos_cafeterias/', blank=True, null=True)
    senha = models.CharField(max_length=128, default='0000')
    cnpj = models.CharField(max_length=14, unique=True, default='00000000000000')
    site_cafeteria = models.URLField(max_length=200, blank=True)

    def _str_(self):
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
            'cnpj': self.cnpj,
        }
    def get_short_description(self):
        if len(self.descricao) > 100:
            return self.descricao[:100].__add__("...")
        else:
            return self.descricao

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

    def _str_(self):
        return f'{self.usuario.username} - {self.cafe.nome}'
    
class UserCliente(models.Model):
    
    nome_completo = models.CharField(max_length=150, default="Desconhecido")
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255, null=True)
    confirm_password = models.CharField(max_length=255, null=True)

    def _str_(self):
        return self.email