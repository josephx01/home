from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact, Product
from .forms import ContactForm

def index(request):
    products = Product.objects.all()
    form = ContactForm()
    return render(request, 'main/index.html', {'products': products, 'form': form})

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def index(request):
    products = Product.objects.all()

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save(commit=False)
            
            ip_address = get_client_ip(request)
            contact.ip_address = ip_address
            
            contact.save()
            messages.success(request, 'Mesajınız uğurla göndərildi!')
            return redirect('index')
    else:
        form = ContactForm()

    return render(request, 'main/index.html', {'products': products, 'form': form})