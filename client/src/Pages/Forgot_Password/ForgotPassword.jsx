import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import './ForgotPassword.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function ForgotPassword() {
    const navigate = useNavigate()
    const [forgotpswd, getForgotpswd] = useState({})
    const forgotpassword = (event) => {
        const name = event.target.name
        const value = event.target.value
        getForgotpswd({ ...forgotpswd, [name]: value })

    }
    console.log(forgotpswd);
    const forgot = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/OTP_Verification_API_view", forgotpswd).then((response) => {
            console.log(response)

            toast.success(response.data.message, {
                icon: '👏',
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            navigate('/otp')

        }).catch((err) => {

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

                <div class="containerin">
                    <ToastContainer />

                    <h1 className='in'>Forgot Password</h1>
                    <form>
                        <table>
                            <tr>
                                <td>Email</td>
                                <td>: <input class="textin" type="email" placeholder="Enter Your Email" onChange={forgotpassword} name='email' /></td>
                            </tr>
                        </table>

                        <center><input class="subin" type="submit" value="Send" name="submit" onClick={forgot} /></center><br /><br />
                    </form>

                </div>
            </>
        </div>

    )
}
