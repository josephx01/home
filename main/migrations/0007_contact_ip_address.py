# Generated by Django 4.2.20 on 2025-04-13 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_contact_email_alter_contact_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='ip_address',
            field=models.GenericIPAddressField(blank=True, null=True),
        ),
    ]
