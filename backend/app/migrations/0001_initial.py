# Generated by Django 4.2.7 on 2024-01-29 13:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.URLField(blank=True, max_length=255, null=True)),
                ('director', models.CharField(max_length=255)),
                ('genres', models.CharField(max_length=255)),
                ('hours', models.IntegerField()),
                ('minutes', models.IntegerField()),
                ('score', models.FloatField()),
                ('rating', models.CharField(max_length=10)),
                ('overview', models.TextField()),
                ('year', models.IntegerField()),
                ('actors', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='FavoriteMovie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.movie')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorite_movies', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
