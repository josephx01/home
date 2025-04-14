from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Creates a superuser if none exist'

    def handle(self, *args, **kwargs):
        if not User.objects.filter(username="admin").exists():
            User.objects.create_superuser("admin", "admin@example.com", "M9&xT4!vPz")
            self.stdout.write(self.style.SUCCESS('Superuser created.'))
        else:
            self.stdout.write('Superuser already exists.')
