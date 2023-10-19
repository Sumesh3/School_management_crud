import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import './Otp.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


export default function Otp() {

    const navigate = useNavigate()
    const [otpverification, getotpverification] = useState({})
    const otpupdation = (event) => {
        const name = event.target.name
        const value = event.target.value
        getotpverification({ ...otpverification, [name]: value })
    }

    const otpsubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/OTP_Checking_API_view", otpverification).then((response) => {
            console.log(response)
            navigate('/newpassword')
        })
        .catch((err)=>{
            toast.error(err.response.data.data, {
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
            <>

                <Navbar />

                <div class="containerotp">
                <ToastContainer/>

                    <h1 className='otp'>OTP Verification</h1>
                    <form>
                        <center><div className='otpemail'>Email : email@gmail.com</div></center>
                        
                        <table>
                            <tr>
                                <td className='otptd'>OTP</td>
                                <td className='otptd'>: <input class="textotp" type="text" placeholder="Enter Your OTP" name='otp' onChange={otpupdation} /></td>
                            </tr>
                        </table>

                        <center><input class="subotp" type="submit" value="Send" name="submit" onClick={otpsubmit} /></center><br /><br />
                    </form>

                </div>
            </>
        </div>
    )
}
