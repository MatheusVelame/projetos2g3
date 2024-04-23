from django.contrib import admin

# Register your models here.

from .models import Cafe
from .models import UserCliente

admin.site.register(Cafe)
admin.site.register(UserCliente)