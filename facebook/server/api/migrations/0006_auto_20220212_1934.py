# Generated by Django 2.2.14 on 2022-02-12 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_post_react'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-created_at']},
        ),
        migrations.AlterField(
            model_name='comment',
            name='comment',
            field=models.TextField(default='HI'),
            preserve_default=False,
        ),
    ]