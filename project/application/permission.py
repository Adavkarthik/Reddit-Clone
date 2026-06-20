from  rest_framework.permissions import BasePermission,SAFE_METHODS


class editpermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        print(request.user)
        print(obj.user.username)
        return request.user==obj.user


    

        