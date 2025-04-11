from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Publisher, Book
from .serializers import PublisherSerializer, BookSerializer, BookDetailsSerializer

class PublisherList(generics.ListCreateAPIView):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer

class PublisherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer

class PublisherBookList(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_gueryset(self):
        publisher_id=self.kwargs['pk']
        return Book.objects.filter(publisher_id=publisher_id)

class BookList(generics.ListCreateAPIView):  
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookDetailsSerializer

class TopTenBooks(generics.ListAPIView):
    serializer_class = BookSerializer
    
    def get_gueryset(self):
        return Book.objects.all().order_by('-price')[:10]
