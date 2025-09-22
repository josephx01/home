from django import forms
from .models import Contact, PackageOrder, Product


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Adınız'}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Email adresiniz'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Telefon nömrəniz'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Mesajınız'}),
        }

    def clean_message(self):
        message = self.cleaned_data.get('message')
        # XSS hücumlarına qarşı sadə yoxlama
        if "<script>" in message.lower() or "</script>" in message.lower():
            raise forms.ValidationError("XSS? Hmmm.")
        return message

class PackageOrderForm(forms.ModelForm):
    class Meta:
        model = PackageOrder
        fields = ['full_name', 'address', 'phone', 'email', 'note']
        widgets = {
            'note': forms.Textarea(attrs={'rows': 3}),
        }
class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price', 'image']
