# Generated by Django 4.0 on 2021-12-31 04:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='slots',
            old_name='phone',
            new_name='companyname',
        ),
    ]