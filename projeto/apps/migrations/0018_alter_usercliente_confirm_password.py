# Generated by Django 5.0.3 on 2024-04-24 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0017_usercliente_confirm_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercliente',
            name='confirm_password',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
