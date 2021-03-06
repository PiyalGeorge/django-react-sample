# from django.conf.urls import url, include
# from django.contrib.auth.models import User
# from rest_framework import routers, serializers, viewsets
#
# from .models import Todo
#
#
# class TodoSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Todo
#         fields = ('id', 'text', 'marked')
#
#
# class TodoViewSet(viewsets.ModelViewSet):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer

from .models import Movie
from rest_framework import serializers

class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'title', 'image')