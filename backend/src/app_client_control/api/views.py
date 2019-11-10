from rest_framework.generics import ListAPIView, RetrieveAPIView
from app_client_control.models import Client
from .serializers import ClientSerializer


class ClientListView(ListAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ClientDetailView(RetrieveAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
