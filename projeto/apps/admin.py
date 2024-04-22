from django.contrib import admin

# Register your models here.

from .models import Cafe
from .models import Cadastrar_Usuario

admin.site.register(Cafe)
admin.site.register(Cadastrar_Usuario)