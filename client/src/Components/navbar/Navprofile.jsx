import React from 'react'
import './Navprofile.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function Navprofile() {
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
                    <a href="/viewprofile">View Profile</a>
                    <a href="/changepassword">Change Password</a>
                    <a className='vv' onClick={logout}>Log out</a>
                </div>
            </div>
        </>
    )
}