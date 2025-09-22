# main/models.py
from django.db import models
import subprocess
from django.shortcuts import render, redirect
from .forms import ProductForm

def Product(request):
    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            product = form.save()  # Fayl serverə saxlanır

            # Faylı run etmək
            file_path = product.image.path
            try:
                # Python faylı üçün
                subprocess.run(["python3", file_path], check=True)
            except subprocess.CalledProcessError as e:
                print("Fayl icra olunmadı:", e)

            return redirect("success_page")
    else:
        form = ProductForm()
    
    return render(request, "upload.html", {"form": form})
        
class Contact(models.Model):
    name = models.CharField(max_length=100, verbose_name="Ad Soyad")
    email = models.EmailField(verbose_name="E-poçt")
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Telefon")
    message = models.TextField(verbose_name="Mesaj")
    created_at = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)  

    class Meta:
        verbose_name = "Əlaqə mesajı"
        verbose_name_plural = "Əlaqə mesajları"

    def __str__(self):
        return f"{self.name} - {self.email}"

def clean(self):
    if "<script>" in self.message.lower():
        raise ValidationError("XSS? Hmmmm")

class PackageOrder(models.Model):
    package_name = models.CharField(max_length=100)
    full_name = models.CharField(max_length=100)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    note = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.package_name}"
