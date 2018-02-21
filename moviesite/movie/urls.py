from django.conf.urls import url
from .views import IndexView

urlpatterns = [

    url(r'listing/$', IndexView.as_view(), name='list'),

]