from rest_framework import serializers
from .models import Movie, FavoriteMovie
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class FavoriteMovieAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteMovie
        fields = '__all__'
        read_only_fields = ['user']


class FavoriteMovielistSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()  
    title = serializers.CharField(source='movie.title')
    image = serializers.URLField(source='movie.image')
    director = serializers.CharField(source='movie.director')
    genres = serializers.CharField(source='movie.genres')
    hours = serializers.IntegerField(source='movie.hours')
    minutes = serializers.IntegerField(source='movie.minutes')
    score = serializers.FloatField(source='movie.score')
    rating = serializers.CharField(source='movie.rating')
    overview = serializers.CharField(source='movie.overview')
    year = serializers.IntegerField(source='movie.year')
    actors = serializers.CharField(source='movie.actors')
    user = serializers.IntegerField(source='user.id')

    class Meta:
        model = FavoriteMovie
        fields = '__all__'
        read_only_fields = ['user', 'movie']
