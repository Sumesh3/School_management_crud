import React from 'react'
import './NavTeach.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


export default function NavTeach() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('id')
        localStorage.removeItem('role')

        navigate('/login')
    }

    return (
        <>
            <div className="dropdown">
                <button className="dropbtn"><MenuIcon /></button>
                <div className="dropdown-content">
                    <a href="/">Home</a>
                    <a href="/viewprofileteacher">View Profile</a>
                    <a href="/studentdata">View Student Data</a>
                    <a href="/teacherdata">View Teacher Data</a>
                    <a href="/changepassword">Change Password</a>
                    <a className='vv' onClick={logout}>Log out</a>
                </div>
            </div>
        </>
    )
}
