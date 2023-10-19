import React from 'react'
import './Navbar.css'
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar() {
    return (
        <div className='navbody'>
            <span className='bbb'><a class="navbar" href="/">Home</a></span>
            <span className='bbb'><a class="navbar" href="/studentregistration">Student Registration</a></span>
            <span className='bbb'><a class="navbar" href="/teacherregistration">Teacher Registration</a></span>
            <span></span>
            
            <span className='aaaa'><a class="navbar" href="/login">Log in <LoginIcon/></a></span>
        </div>
    )
}
