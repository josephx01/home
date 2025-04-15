from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact, Product
from .forms import ContactForm, PackageOrderForm
from django.core.mail import send_mail
from django.conf import settings

PACKAGES = {
    'standart': {
        'name': 'Standart',
        'image': '/static/images/standart.png',
        'description': 'Əsas xidmətləri əhatə edir. Kiçik təmir işləri üçün uyğundur.',
        'details': 'Bu paketə daxildir: divar boyası, su sızmalarının aradan qaldırılması və ümumi baxış.',
    },
    'premium': {
        'name': 'Premium',
        'image': '/static/images/premium.png',
        'description': 'Əlavə xidmətlərlə zənginləşdirilmiş paket.',
        'details': 'Əsas xidmətlər + elektrik sistemi yoxlaması + parket dəyişimi.',
    },
    'luxury': {
        'name': 'Luxury',
        'image': '/static/images/luxury.png',
        'description': 'Yüksək səviyyəli təmir və dizayn xidmətləri.',
        'details': 'Divar kağızları, tavan işləri, dizayn konsultasiyası və s.',
    },
    'vip': {
        'name': 'VIP',
        'image': '/static/images/vip.png',
        'description': 'Ən yüksək səviyyədə fərdi xidmətlər.',
        'details': 'Eksklüziv materiallar, interyer dizaynı və xüsusi nəzarət.',
    },
}

def index(request):
    products = Product.objects.all()
    form = ContactForm()
    return render(request, 'main/index.html', {'products': products, 'packages': PACKAGES, 'form': form})

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

def package_detail(request, package_key):
    package = PACKAGES.get(package_key)
    if not package:
        return redirect('index')

    if request.method == 'POST':
        form = PackageOrderForm(request.POST)
        if form.is_valid():
            order = form.save(commit=False)
            order.package_name = package['name']
            order.save()

            # Email göndərmək
            send_mail(
                subject='Yeni paket sifarişi',
                message=f"{order.full_name} adlı istifadəçi {order.package_name} paketini sifariş etdi.\n\n"
                        f"Ünvan: {order.address}\nTelefon: {order.phone}\nEmail: {order.email}\nQeyd: {order.note}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL],
                fail_silently=True
            )

            messages.success(request, "Sifarişiniz uğurla qəbul olundu!")
            return redirect('package_detail', package_key=package_key)
    else:
        form = PackageOrderForm()

    return render(request, 'main/package_detail.html', {
        'package': package,
        'form': form
    })
