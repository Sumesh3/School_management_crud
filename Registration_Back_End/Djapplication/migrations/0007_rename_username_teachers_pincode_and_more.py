# Generated by Django 4.2.3 on 2023-09-04 06:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("Djapplication", "0006_remove_student_password"),
    ]

    operations = [
        migrations.RenameField(
            model_name="teachers",
            old_name="username",
            new_name="pincode",
        ),
        migrations.RemoveField(
            model_name="teachers",
            name="password",
        ),
    ]
