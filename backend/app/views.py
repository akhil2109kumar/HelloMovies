from rest_framework import generics, permissions
from rest_framework import filters
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.pagination import PageNumberPagination
from .models import Movie, FavoriteMovie
from .serializers import FavoriteMovieAddSerializer, FavoriteMovielistSerializer, MovieSerializer, UserSerializer
from django.contrib.auth.models import User


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user_id': user.id}, status=status.HTTP_201_CREATED)

    def perform_create(self, serializer):
        return serializer.save()
    

class MovieListView(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['title']
    search_fields = ['title']
    pagination_class = PageNumberPagination

class MovieRetrieveView(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class FavoriteMovieListView(generics.ListCreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method == 'POST':  
            return FavoriteMovieAddSerializer
        else:  
            return FavoriteMovielistSerializer

    def get_queryset(self):
        user = self.request.user
        return FavoriteMovie.objects.filter(user=user)

    def perform_create(self, serializer):
        user = self.request.user
        movie = serializer.validated_data['movie']
        
        if FavoriteMovie.objects.filter(user=user, movie=movie).exists():
            return Response({"message": "Movie is already a favorite."}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save(user=user)


class FavoriteMovieDeleteView(generics.DestroyAPIView):
    serializer_class = FavoriteMovielistSerializer  
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return FavoriteMovie.objects.filter(user=user)
