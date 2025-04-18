"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import (
    company_list, company_detail, company_vacancies,
    vacancy_list, vacancy_detail, top_ten_vacancies
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', company_list),
    path('api/companies/<int:id>/', company_detail),
    path('api/companies/<int:id>/vacancies/', company_vacancies),
    path('api/vacancies/', vacancy_list),
    path('api/vacancies/<int:id>/', vacancy_detail),
    path('api/vacancies/top_ten/', top_ten_vacancies),
]