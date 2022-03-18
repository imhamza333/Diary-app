from django.urls import path
from .  import (
    ArticleListView
)

urlpatterns = [
    path('', ArticleListView.as_view())
]