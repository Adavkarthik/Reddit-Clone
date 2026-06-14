from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import userserializer,commentserializer,replyserializer
from rest_framework.response import Response
from .models import comments,replies
from .permission import editpermission
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated 
# Create your views here.

class register(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=userserializer
    def create(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data=serializer.save()
        return Response({"Message":f"{data.username} refgistered succesfully!!"})
    
        

#---------comments-----------
class commentview(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated]
    queryset=comments.objects.all()
    serializer_class=commentserializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class commentviewsingle(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=[editpermission,IsAuthenticated]
    queryset=comments.objects.all()
    serializer_class=commentserializer

#--------reply-----------
class replyview(generics.ListCreateAPIView):
    permission_classes=[editpermission,IsAuthenticated]
    serializer_class=replyserializer
    def get_queryset(self):
        model=replies.objects.filter(comment=self.kwargs["comment_id"])
        return model
    def perform_create(self,serializer):
        comment_id=get_object_or_404(comments,id=self.kwargs["comment_id"])
        data=serializer.save(comment=comment_id,user=self.request.user)

class replyviewsimgle(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=[editpermission,IsAuthenticated]
    queryset=replies.objects.all()
    serializer_class=replyserializer




        
    


    
    


