from django.shortcuts import render
from rest_framework import generics
from .models import Shoes
from .serializers import ShoesSerializer

class ShoesList(generics.ListCreateAPIView):
    queryset = Shoes.objects.all()
    serializer_class = ShoesSerializer

class ShoesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shoes.objects.all()
    serializer_class = ShoesSerializer