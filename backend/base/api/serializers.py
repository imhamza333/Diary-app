from rest_framework import serializers
from base.models import Article



class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'text', 'content')