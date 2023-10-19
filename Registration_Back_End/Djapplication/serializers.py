from rest_framework import serializers
from .models import Log, Student , Teachers

class LoginStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = '__all__'

class StudentRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
    def create(serlf,validated_data):
        return Student.objects.create(**validated_data)

class TeacherRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = '__all__'
    def create(serlf,validated_data):
        return Teachers.objects.create(**validated_data)
    