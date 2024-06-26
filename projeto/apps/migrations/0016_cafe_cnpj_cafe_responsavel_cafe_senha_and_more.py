# Generated by Django 5.0.3 on 2024-04-24 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0015_rename_nome_cafe_nome_cafeteria'),
    ]

    operations = [
        migrations.AddField(
            model_name='cafe',
            name='cnpj',
            field=models.CharField(default='00000000000000', max_length=14, unique=True),
        ),
        migrations.AddField(
            model_name='cafe',
            name='responsavel',
            field=models.CharField(default='Nome do responsável não informado', max_length=100),
        ),
        migrations.AddField(
            model_name='cafe',
            name='senha',
            field=models.CharField(default='0000', max_length=128),
        ),
        migrations.AddField(
            model_name='cafe',
            name='site_cafeteria',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='cafe',
            name='email',
            field=models.EmailField(default='default@example.com', max_length=254, unique=True),
        ),
    ]
