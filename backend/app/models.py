from django.db import models
from django.contrib.auth.models import User

class Movie(models.Model):
    title = models.CharField(max_length=255)
    image = models.URLField(max_length=255, null=True, blank=True)
    director = models.CharField(max_length=255)
    genres = models.CharField(max_length=255)
    hours = models.IntegerField()
    minutes = models.IntegerField()
    score = models.FloatField()
    rating = models.CharField(max_length=10)
    overview = models.TextField()
    year = models.IntegerField()
    actors = models.CharField(max_length=255)

    def get_actors_list(self):
        return [actor.strip() for actor in self.actors.split(',')]

    def set_actors_list(self, actors_list):
        self.actors = ', '.join(actors_list)

    def __str__(self):
        return self.title

class FavoriteMovie(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorite_movies')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}'s Favorite: {self.movie.title}"
