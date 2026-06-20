from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class comments(models.Model):
    comment=models.CharField(max_length=20)
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="all_comments")
    def __str__(self):
        return f"{self.comment}"
        
class replies(models.Model):
    reply=models.CharField(max_length=20)
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="all_replies")
    comment=models.ForeignKey(comments,on_delete=models.CASCADE,related_name="all_comments_from_replies")
    def __str__(self):
        return f"{self.user}-{self.reply}-{self.comment}"
    