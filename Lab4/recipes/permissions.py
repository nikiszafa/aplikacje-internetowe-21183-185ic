from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        #Read-only dostępny dla wszystkich requestow
        if request.method in permissions.SAFE_METHODS:
            return True

        #Write permission tylko dla autora postu
        return obj.author == request.user