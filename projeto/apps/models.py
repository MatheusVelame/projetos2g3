from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class UserCliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    nome_completo = models.CharField(max_length=150, default="Desconhecido")
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255, null=True)
    confirm_password = models.CharField(max_length=255, null=True)
    is_business = models.BooleanField(default=False)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    def __str__(self):
        return self.email

class Cafe(models.Model):
    responsavel = models.CharField(max_length=100, blank=False, default='Nome do responsável não informado')
    nome_cafeteria = models.CharField(max_length=100, blank=False, default='Nome não informado')
    endereco = models.CharField(max_length=100, blank=False, default='Endereço não informado')
    descricao = models.TextField(blank=False, default='Descrição não informada')
    email = models.EmailField()
    whatsapp = models.CharField(max_length=13, default='5500000000000')
    horas_funcionamento = models.CharField(max_length=100, blank=False, default='Horário não informado')
    link_redesocial = models.URLField(max_length=200, blank=True)
    foto_ambiente = models.ImageField(upload_to='fotos_cafeterias/', blank=True, null=True)
    cnpj = models.CharField(max_length=14, unique=True, default='00000000000000')
    site_cafeteria = models.URLField(max_length=200, blank=True)
    empresario = models.ForeignKey(UserCliente, on_delete=models.CASCADE, related_name='cafeterias', null=True, blank=True)

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
            'cnpj': self.cnpj,
        }
    def get_short_description(self):
        if len(self.descricao) > 70:
            return self.descricao[:70].__add__("...")
        else:
            return self.descricao

class Favorito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE)

    def detalhes(self):
        return {
            'nome': self.cafe.nome_cafeteria,
            'endereco': self.cafe.endereco,
            'descricao': self.cafe.descricao,
            'email': self.cafe.email,
            'whatsapp': self.cafe.whatsapp,
            'horas_funcionamento': self.cafe.horas_funcionamento,
            'link_redesocial': self.cafe.link_redesocial,
            'foto_ambiente': self.cafe.foto_ambiente.url if self.cafe.foto_ambiente else None,
        }

    def __str__(self):
        return f'{self.usuario.username} - {self.cafe.nome_cafeteria}'

class Historico(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE)
    visited_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'cafe', 'visited_at')  # Evita duplicatas exatas

    def detalhes(self):
        return {
            'nome': self.cafe.nome_cafeteria,
            'endereco': self.cafe.endereco,
            'descricao': self.cafe.descricao,
            'email': self.cafe.email,
            'whatsapp': self.cafe.whatsapp,
            'horas_funcionamento': self.cafe.horas_funcionamento,
            'link_redesocial': self.cafe.link_redesocial,
            'foto_ambiente': self.cafe.foto_ambiente.url if self.cafe.foto_ambiente else None,
        }

    def __str__(self):
        return f'{self.usuario.username} - {self.cafe.nome_cafeteria}'

class ReservaCafe(models.Model):
    cafe = models.ForeignKey(Cafe, on_delete=models.PROTECT)
    cliente = models.ForeignKey(UserCliente, on_delete=models.PROTECT)
    nome_cliente = models.CharField(max_length=100, blank=True, null=True)
    data_reserva = models.DateField()
    horario_reserva = models.TimeField()
    numero_de_pessoas = models.PositiveIntegerField(default=1)
    observacao = models.TextField(blank=False, default='Descrição não informada')


    @property
    def status(self):
        hoje = timezone.now().date()
        hora = timezone.now().time()
        if self.data_reserva < hoje:
            return "Reserva terminada"
        elif self.data_reserva == hoje and self.horario_reserva < hora:
            return "Reserva terminada"
        elif self.data_reserva == hoje and self.horario_reserva > hora:
            return "Reserva para hoje"
        else:
            return "Reserva futura"

    @classmethod
    def minhas_reservas(cls, cliente_email):
        return cls.objects.filter(cliente__email=cliente_email)

    def __str__(self):
        return f"Reserva no {self.cafe.nome_cafeteria} por {self.cliente.nome_completo}"
    
class Avaliacao(models.Model):
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE)
    cliente = models.ForeignKey(UserCliente, on_delete=models.CASCADE)
    avaliacao = models.IntegerField(choices=[(i, i) for i in range(1, 6)], default=1)
    comentario = models.TextField(blank=True, null=True)
    valor_gasto = models.CharField(max_length=50, blank=True, null=True)
    data_avaliacao = models.DateTimeField(auto_now_add=True)
    foto_avaliacao= models.ImageField(upload_to='fotos_experiencias/', blank=True, null=True)

    def __str__(self):
        return f"Avaliação de {self.cliente.nome_completo} para {self.cafe.nome_cafeteria}"


