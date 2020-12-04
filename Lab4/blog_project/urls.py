"""blog_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

from rest_framework.documentation import include_docs_urls #new

from rest_framework.schemas import get_schema_view #new
from rest_framework_swagger.views import get_swagger_view #new

API_TITLE = 'Blog API' #new
API_DESCRIPTION = 'A web api for creating editing posts.'
schema_view = get_swagger_view(title='Blog API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('posts.urls')),
    path('api-auth',include('rest_framework.urls')), #new
    path('api/v1/rest-auth/', include('rest_auth.urls')),
    path('api/v1/rest-auth/registration/', include('rest_auth.registration.urls')),

    path('api/v2/', include('recipes.urls')), #mod
    path('api/v2/rest-auth/', include('rest_auth.urls')),
    path('api/v2/rest-auth/registration/', include('rest_auth.registration.urls')),

    path('docs/',include_docs_urls(title=API_TITLE, description=API_DESCRIPTION)),
    path('swagger-docs/',schema_view),
]
