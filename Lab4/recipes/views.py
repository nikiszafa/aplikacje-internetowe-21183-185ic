from django.contrib.auth import get_user_model #new
from rest_framework import viewsets #new
#from rest_framework import generics

from .models import Recipe
from .permissions import IsAuthorOrReadOnly
from .serializers import RecipeSerializer, UserSerializer

class RecipeViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer