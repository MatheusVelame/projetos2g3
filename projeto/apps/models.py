from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# quem tiver com essa ponta de cadastro das cafeterias pode elaborar o model abaixo, só tô colocando um pontapé pra conseguir fazer o model "Favorito"
class Cafe(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    email = models.EmailField(default="default@example.com")


    def __str__(self):
        return self.nome
    
class Favorito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.usuario.username} - {self.cafe.nome}'