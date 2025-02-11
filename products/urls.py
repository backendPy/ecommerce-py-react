from django.urls import path
from .views import ShoesList, ShoesDetail

urlpatterns = [
    path('shoes/', ShoesList.as_view(), name='shoes-list-create'),
    path('shoes/<int:pk>/', ShoesDetail.as_view(), name='shoes-detail'),
]
