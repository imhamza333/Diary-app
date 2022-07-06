from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import blog
from .serializers import blogSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getBlogs(request):
    blogs =  blog.objects.all().order_by('-updated')
    serializer = blogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getBlog(request, pk):
    blogs =  blog.objects.get(id=pk)
    serializer = blogSerializer(blogs, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateBlog(request, pk):
    data = request.data
    blogs = blog.objects.get(id=pk)
    serializer = blogSerializer(instance=blogs, data=data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)



@api_view(['DELETE'])
def deleteBlog(request, pk):
     Blogs = blog.objects.get(id=pk)
     Blogs.delete()
     return Response('Note was deleted!')


@api_view(['POST'])
def createBlog (request):
    data = request.data
    Blogs = blog.objects.create(
        body=data['body'],
        # title=data['title']
    )
    serializer = blogSerializer(Blogs, many=True)
    return Response(serializer.data)



