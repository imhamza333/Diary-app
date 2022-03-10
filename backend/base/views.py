from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.

def getRoutes(request):
    return JsonResponse('hello', safe=False)

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    query_set = Todo.objects.all()