import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentReg from './Pages/Registration/StudentReg';
import TeacherReg from './Pages/Registration/TeacherReg';
import Login_Page from './Pages/Registration/Login_Page';
import Teachercont from './Pages/Contentss/Teachercont';
import Studentcont from './Pages/Contentss/Studentcont';
import Home from './Pages/Home_Page/Home';
import Navprofile from './Components/navbar/Navprofile';
import ViewStud from './Pages/View_Data/ViewStud';
import ViewTeach from './Pages/View_Data/ViewTeach';
import Profilestd from './Pages/Profile/Profilestd';
import Editstdpro from './Pages/Profile/Editstdpro';
import Profileteach from './Pages/Profile/Profileteach';
import ForgotPassword from './Pages/Forgot_Password/ForgotPassword';
import Otp from './Pages/Forgot_Password/Otp';
import Newpassword from './Pages/Forgot_Password/Newpassword';
import ChangePassword from './Pages/Forgot_Password/ChangePassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/studentregistration' element={<StudentReg/>}/>
          <Route path='/teacherregistration' element={<TeacherReg/>}/>
          <Route path='/login' element={<Login_Page/>}/>
          <Route path='/teacherresp' element={<Teachercont/>}/>
          <Route path='/studentresp' element={<Studentcont/>}/>
          {/* <Route path='/' element={<Navprofile/>}/> */}
          <Route path='/studentdata' element={<ViewStud/>}/>
          <Route path='/teacherdata' element={<ViewTeach/>}/>
          <Route path='/viewprofile' element={<Profilestd/>}/>
          {/* <Route path='/' element={<Editstdpro/>}/> */}
          <Route path='/viewprofileteacher' element={<Profileteach/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/newpassword' element={<Newpassword/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
