# Generated by Django 2.2.14 on 2022-02-26 05:05

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20220225_1936'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='isReact',
        ),
        migrations.AddField(
            model_name='post',
            name='isReacted',
            field=models.ManyToManyField(blank=True, related_name='isReacted', to=settings.AUTH_USER_MODEL),
        ),
    ]
