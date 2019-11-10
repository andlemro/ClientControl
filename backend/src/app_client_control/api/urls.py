from django.urls import include, path

from.views import ClientListView, ClientDetailView

urlpatterns = [
    path('', ClientListView.as_view()),
    path('<pk>', ClientDetailView.as_view())
]
