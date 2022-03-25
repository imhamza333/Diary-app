from django.urls import path

from .import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('blogs/', views.getBlogs, name='blogs'),
    path('blogs/<str:pk>/update/', views.updateBlog, name='update-blog'),
    
    path('blogs/<str:pk>/', views.getBlog, name='blogs'),
]