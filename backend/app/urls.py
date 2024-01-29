from django.urls import path
from . import views

urlpatterns = [
    path("signup/", views.UserCreateView.as_view(), name="user-create"),
    path("movies/", views.MovieListView.as_view(), name="movie-list"),
    path("movies/<int:pk>/", views.MovieRetrieveView.as_view(), name="movie-detail"),
    path("favorite/list/", views.FavoriteMovieListView.as_view(), name="favorite-list"),
    path("favorite/add/", views.FavoriteMovieListView.as_view(), name="favorite-add"),
    path(
        "favorites/remove/<int:pk>/",
        views.FavoriteMovieDeleteView.as_view(),
        name="favorite-delete",
    ),
]
