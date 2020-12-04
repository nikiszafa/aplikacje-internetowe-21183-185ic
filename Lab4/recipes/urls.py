from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import RecipeViewSet, UserViewSet

router = SimpleRouter()
router.register('users', UserViewSet, basename='users')
router.register('', RecipeViewSet, basename='recipes')
urlpatterns = router.urls