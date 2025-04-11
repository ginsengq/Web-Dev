from rest_framework import serializers
from .models import Publisher, Book

class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = ['id', 'name', 'description', 'city', 'address']

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'synopsis', 'price', 'publisher']

class BookDetailsSerializer(serializers.ModelSerializer):
    publisher = PublisherSerializer(read_only=True)
    class Meta:
        model = Book
        fields = ['id', 'title', 'synopsis', 'price', 'publisher']