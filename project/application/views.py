from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import userserializer,commentserializer,replyserializer,usersommentserializer,usersreplyserializer
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
    lookup_url_kwarg="comment_id"





#--------reply-----------
class replyview(generics.ListCreateAPIView):
    permission_classes=[editpermission,IsAuthenticated]
    queryset=replies.objects.all()
    serializer_class=replyserializer
    def get_queryset(self):
        return replies.objects.filter(comment=self.kwargs["comment_id"])
    def perform_create(self, serializer):
        serializer.save(comment=comments.objects.get(id=self.kwargs["comment_id"]),user=self.request.user)

class replyviewsimgle(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=[editpermission,IsAuthenticated]
    queryset=replies.objects.all()
    serializer_class=replyserializer
    lookup_url_kwarg="reply_id"        



class usercomment(generics.ListAPIView):
    serializer_class=usersommentserializer

    def get_queryset(self):
        username=self.kwargs["username"]
        # user_id=User.objects.get(id=username)
        return comments.objects.filter(user__username=username)
    

class userreplies(generics.ListAPIView):
    serializer_class=usersreplyserializer
    def get_queryset(self):
        return replies.objects.filter(user__username=self.kwargs["username"])
        
    



        
    


    
    


