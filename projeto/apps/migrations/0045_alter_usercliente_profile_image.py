# Generated by Django 5.0.3 on 2024-06-07 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0044_merge_20240523_2012'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercliente',
            name='profile_image',
            field=models.ImageField(blank=True, null=True, upload_to='profile_image/'),
        ),
    ]
