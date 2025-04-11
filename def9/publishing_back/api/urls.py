from django.urls import path
from . import views

urlpatterns = [
    path('publishers/', views.PublisherList.as_view(), name='publisher_list'),
    path('publishers/<int:pk>/', views.PublisherDetail.as_view(), name='publisher_detail'),
    path('publishers/<int:pk>/book', views.PublisherBookList.as_view(), name='publisher-booklist'),
    path('books/<int:pk>/', views.BookDetail.as_view(), name='book-detail'),
    path('books/', views.BookList.as_view(), name='book-detail'),
    path('books/<int:pk>/top-ten', views.TopTenBooks.as_view(), name='top-teen'),
]