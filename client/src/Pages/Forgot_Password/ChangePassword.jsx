import React, { useState } from 'react'
import './ChangePassword.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ChangePassword() {
    const logid = localStorage.getItem('login_id')
    const [changePass, setchangePass] = useState({
        logid: logid
    })

    const navigate = useNavigate()

    const passwords = (event) => {
        const name = event.target.name
        const value = event.target.value
        setchangePass({ ...changePass, [name]: value })
    }
    console.log(changePass);

    const updatepass = () => {
        axios.put(`http://127.0.0.1:8000/api/new_update_Password/${logid}`, changePass).then((response) => {
            console.log(response)
                navigate('/login')

        })
            .catch((err) => {
                toast.error(err.response.data.error, {
                    position: "bottom-center",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                console.log(err);
            })

    }

    return (
        <div>
            <div className='bodych'>
                <center>
                    <div className="profile-cardv">
                        <div className="password-section">
                            <h2 className='headding'>Change Password</h2><br></br>
                            <input className="password-input" type="password" placeholder="Current Password" name='cpassword' onChange={passwords} />
                            <input className="password-input" type="password" placeholder="New Password" name='npassword' onChange={passwords} />
                            <input className="password-input" type="password" placeholder="Confirm New Password" name='upassword' onChange={passwords} />
                            <button className="password-save-button" onClick={updatepass}>Save Password</button>
                        </div>
                    </div>
                </center>

            </div>
        </div>

    )
}
