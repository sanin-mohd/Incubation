# Generated by Django 4.0 on 2022-01-02 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_remove_application_companylogo_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='companylogo',
            field=models.ImageField(max_length=20, null=True, upload_to=''),
        ),
    ]
