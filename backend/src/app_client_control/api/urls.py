from django.urls import include, path

from.views import (
    ClientListView, ClientDetailView, ClientCreateView, ClientUpdateView,
    HistoryListView
)

urlpatterns = [
    path('', ClientListView.as_view()),
    path('<pk>', HistoryListView.as_view()),
    path('create/', ClientCreateView.as_view()),
    path('update/<pk>', ClientUpdateView.as_view()),
]
