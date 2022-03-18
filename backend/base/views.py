from django.shortcuts import render
from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView
)

from base.models import Article 
from base.api.serializers import ArticleSerializer

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer 
    permission_classes = (permissions.AllowAny)








# from django.http import JsonResponse
# from rest_framework import viewsets
# from api.serializers import ArticleSerializer
# from .models import Article

# # Create your views here.

# def getRoutes(request):
#     return JsonResponse('hello', safe=False)

# class TodoView(viewsets.ModelViewSet):
#     serializer_class = ArticleSerializer
#     query_set = Article.objects.all()