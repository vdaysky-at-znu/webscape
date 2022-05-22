from django.shortcuts import render


def landing(request):
    return render(request, "landing.html")


def about(request):
    return render(request, "about.html")


def product(request):
    return render(request, "product.html")


def gallery(request):
    return render(request, "gallery.html")


def blog(request):
    return render(request, "blog.html")
