from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import Log, Student, Teachers
from .serializers import LoginStudentSerializer, StudentRegisterSerializer, TeacherRegisterSerializer
from .PythonMail import sendmail
x=0
data=""
z=""
class StudentRegisterAPIView(GenericAPIView):
    serializer_class = StudentRegisterSerializer
    serializer_class_login = LoginStudentSerializer
    def post(self,request):
        login_id=""
        name = request.data.get('name')
        email = request.data.get('email')
        phonenumber = request.data.get('phonenumber')
        place = request.data.get('place')
        post = request.data.get('post')
        pincode = request.data.get('pincode')
        password = request.data.get('password')
        role = "Student"
        if (Log.objects.filter(username=email)):
            return Response({'message': 'Duplicate email Found!'}, status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login = self.serializer_class_login(data = {'username':email, 'password': password, 'role':role})

        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
            print(login_id)

        if (Student.objects.filter(phonenumber=phonenumber)):
            return Response({'message': 'Duplicate phonenumber Found!'}, status = status.HTTP_400_BAD_REQUEST)
        elif (Teachers.objects.filter(phonenumber=phonenumber)):
            return Response({'message': 'Duplicate phonenumber Found!'}, status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer = self.serializer_class(data = {'log_id':login_id,'name':name, 'email':email, 'phonenumber': phonenumber, 'place':place, 'post':post, 'pincode':pincode, 'role':role})


        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data, 'message':'Student registered successfully','success':1}, status = status.HTTP_200_OK)
        return Response({'data':serializer.errors, 'message':'Student registration failed','success':0}, status= status.HTTP_400_BAD_REQUEST)


class get_studentAPIView(GenericAPIView):
    serializer_class = StudentRegisterSerializer
    def get(self,request):
        queryset = Student.objects.all()
        if (queryset.count()>0):
            serializer = StudentRegisterSerializer(queryset, many=True)
            return Response({'data':serializer.data, 'message':'data get', 'success':True},status = status.HTTP_200_OK)
        else:
            return Response({'data':'No data available'}, status=status.HTTP_400_BAD_REQUEST)
        
class SingleStudentAPTView(GenericAPIView):
    def get(self, request, id):
        queryset = Student.objects.get(pk=id)
        serializer = StudentRegisterSerializer(queryset)
        return Response(serializer.data)


class update_studentAPIView(GenericAPIView):
    Serializer_class = StudentRegisterSerializer
    def put(self, request, id):
        queryset = Student.objects.get(pk=id)
        print(queryset)
        serializer = StudentRegisterSerializer(instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data, 'message':'updated successfully','success':1}, status=status.HTTP_200_OK)
        

class delete_studentAPIView(GenericAPIView):
    def delete(self, request, id):
        delmember = Student.objects.get(pk=id)
        delmember.delete()
        return Response({'message': 'Deleted successfully'})


#TEACHERS


class TeacherRegisterAPIView(GenericAPIView):
    serializer_class = TeacherRegisterSerializer
    serializer_class_login = LoginStudentSerializer
    def post(self,request):
        log_id=""
        name = request.data.get('name')
        pincode = request.data.get('pincode')
        email = request.data.get('email')
        phonenumber = request.data.get('phonenumber')
        address = request.data.get('address')
        subject = request.data.get('subject')
        password = request.data.get('password')
        role = "Teacher"
        if Log.objects.filter(username=email):
            return Response({'message':'Duplicate Email Found!'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login = self.serializer_class_login(data={'username':email, 'password':password, 'role':role})
            print(serializer_login)
        if serializer_login.is_valid():
            login = serializer_login.save()
            log_id = login.id
            print(log_id)

        if (Teachers.objects.filter(phonenumber=phonenumber)):
            return Response({'message': 'Duplicate phonenumber Found!'}, status = status.HTTP_400_BAD_REQUEST)
        elif (Student.objects.filter(phonenumber=phonenumber)):
            return Response({'message': 'Duplicate phonenumber Found!'}, status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer = self.serializer_class(data={'log_id':log_id, 'name':name, 'pincode':pincode, 'email':email, 'phonenumber':phonenumber, 'address':address, 'subject':subject, 'role':role})

        if serializer.is_valid():
              serializer.save()
              return Response({'data':serializer.data, 'message' : 'Teacher registered successfully', 'success':1},status= status.HTTP_200_OK)
        return Response({'data' : serializer.errors,'message' : 'Teacher registration failed', 'success': 0}, status= status.HTTP_400_BAD_REQUEST)

        
class get_teacherAPIView(GenericAPIView):
    serializer_class = TeacherRegisterSerializer
    def get(self,request):
        store = Teachers.objects.all()
        if (store.count()>0):
            serializer = TeacherRegisterSerializer(store, many=True)
            return Response({'data':serializer.data, 'message':'data get', 'success':True},status = status.HTTP_200_OK)
        else:
            return Response({'data':'No data available'}, status=status.HTTP_400_BAD_REQUEST)


class SingleTeacherAPTView(GenericAPIView):
    def get(self, request, id):
        queryset = Teachers.objects.get(pk=id)
        serializer = TeacherRegisterSerializer(queryset)
        return Response(serializer.data)
    
class update_teacherAPIView(GenericAPIView):
    Serializer_class = TeacherRegisterSerializer
    def put(self, request, id):
        queryset = Teachers.objects.get(pk=id)
        print(queryset)
        serializer = TeacherRegisterSerializer(instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data, 'message':'updated successfully','success':1}, status=status.HTTP_200_OK)
        
class delete_teacherAPIView(GenericAPIView):
    def delete(self, request, id):
        delmember = Teachers.objects.get(pk=id)
        delmember.delete()
        return Response({'message': 'Deleted successfully'})


class LoginAPIView(GenericAPIView):
    serializer_class = LoginStudentSerializer
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        logreg = Log.objects.filter(username=username, password=password)
        if (logreg.count()>0):
            read_serializer = LoginStudentSerializer(logreg, many=True)
            for i in read_serializer.data:
                login_id=i['id']
                role=i['role']
                
                student_data=Student.objects.filter(log_id=login_id).values()
                for i in student_data:
                    id = i['id']
                    name = i['name']

                teacher_data=Teachers.objects.filter(log_id=login_id).values()
                for i in teacher_data:
                    id = i['id']
                    name = i['name']

            return Response({'data':{'login_id':login_id,'user_id':id,'username':username,'password':password,'name':name,'role':role},'success':1, 'message':'Logged in successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'data':'username or password is invalid'}, status = status.HTTP_400_BAD_REQUEST)
    
#OTP

class OTP_Verification_API_view(GenericAPIView):
    serializer_class = LoginStudentSerializer
   
    def post(self,request):
        email = request.data.get('email')
        global data
        data=email
        print(email)
        sendotp = Log.objects.filter(username=email)  
        print(sendotp)
        if (sendotp.count()>0):
                global x
                x=sendmail(email)
                print(x)

                return Response({'data':{'email':email},'success':1, 'message':'Send OTP successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'data':'Invalid E-mail id'}, status = status.HTTP_400_BAD_REQUEST)
        
class OTP_Checking_API_view(GenericAPIView):
   
    def post(self,request):
        otp = request.data.get('otp')
        y=int(otp)
        print(y)

        print(x)
        if(x==y):
            print("working")
            print(data,"dgsfjhgdskjhgfh")
            global z
            z=data
            

            return Response({'success':1, 'message':'OTP successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'data':'Incorrect OTP'}, status = status.HTTP_400_BAD_REQUEST)

class UpdatePasswordAPIView(GenericAPIView):
    serializer_class = LoginStudentSerializer

    def post(self, request):
        password = request.data.get('pass')
        cpassword = request.data.get('cpass')
        
        if password == cpassword:
            try:
                user = Log.objects.get(username=z)
                user.password = password
                user.save()
                return Response({'success': 1, 'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
            except Log.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)



class new_update_Password(GenericAPIView):

    Serializer_class = LoginStudentSerializer
    def put(self, request, id):        
        cpassword = request.data.get('cpassword')
        npassword = request.data.get('npassword')
        upassword = request.data.get('upassword')
        userid = request.data.get('logid')

        passdata = Log.objects.get(id=userid)
        print(passdata)

        if passdata.password == cpassword :
            if npassword == upassword:
                passdata.password=upassword
                passdata.save()
                return Response({'message':'update password successfully','success':1}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)