from django.urls import path
from .import views

urlpatterns = [
    path("StudentRegisterAPIView", views.StudentRegisterAPIView.as_view(), name="StudentRegisterAPIView"),
    path("get_studentAPIView", views.get_studentAPIView.as_view(), name="get_studentAPIView"),
    path("update_studentAPIView/<int:id>", views.update_studentAPIView.as_view(), name="update_studentAPIView"),
    path("SingleStudentAPTView/<int:id>", views.SingleStudentAPTView.as_view(), name="SingleStudentAPTView"),
    path("delete_studentAPIView/<int:id>", views.delete_studentAPIView.as_view(), name="delete_studentAPIView"),
    
    path("TeacherRegisterAPIView", views.TeacherRegisterAPIView.as_view(), name="TeacherRegisterAPIView"),
    path("get_teacherAPIView", views.get_teacherAPIView.as_view(), name="get_teacherAPIView"),
    path("SingleTeacherAPTView/<int:id>", views.SingleTeacherAPTView.as_view(), name="SingleTeacherAPTView"),
    path("update_teacherAPIView/<int:id>", views.update_teacherAPIView.as_view(), name="update_teacherAPIView"),
    path("delete_teacherAPIView/<int:id>", views.delete_teacherAPIView.as_view(), name="delete_teacherAPIView"),
   
    path("LoginAPIView", views.LoginAPIView.as_view(), name="LoginAPIView"),
    path("OTP_Verification_API_view", views.OTP_Verification_API_view.as_view(), name="OTP_Verification_API_view"),
    path("OTP_Checking_API_view", views.OTP_Checking_API_view.as_view(), name="OTP_Checking_API_view"),

    path("UpdatePasswordAPIView", views.UpdatePasswordAPIView.as_view(), name="UpdatePasswordAPIView"),
    path("new_update_Password/<int:id>", views.new_update_Password.as_view(), name="new_update_Password"),
]