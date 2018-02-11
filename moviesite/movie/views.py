from django.shortcuts import render


def indexview(request):
    "a index view"
    return render(request, 'index.html')
