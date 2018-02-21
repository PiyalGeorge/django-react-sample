from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [

    path('movie/', include('movie.urls')),
    path('admin/', admin.site.urls),

    url(r'^api/v1/', include('api.v1.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
