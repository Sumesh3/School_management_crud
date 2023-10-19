import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import './Login_Page.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function Login_Page() {
    const [loginputs, setLoginputs] = useState({
        username: '',
        password: ''
    })


    const [Formerrors, setFormerrors] = useState({})

    console.log(Formerrors);
    const navigate = useNavigate()
    const logindata = (event) => {
        const name = event.target.name
        const value = event.target.value
        setLoginputs({ ...loginputs, [name]: value })
    }

    const validate = (values) => {
        var error = {}
        let any = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
        if (!values.username) {
            error.username = 'Enter username'
        }
        else if (any.test(values.email)) {
            error.username = 'invalid format'
        }
        if (!values.password) {
            error.password = 'Enter password'
        }

        return error
    }

    const logined = (event) => {
        event.preventDefault()
        setFormerrors(validate(loginputs))
        if (Object.keys(Formerrors).length === 0) {
            axios.post("http://127.0.0.1:8000/api/LoginAPIView", loginputs).then((response) => {
                console.log(response)
                console.log(response.data.data)
                console.log(response.data.data.role)
                console.log(response.data.data.username)
                console.log(response.data.data.user_id)

                localStorage.setItem('role', response.data.data.role)
                localStorage.setItem('username', response.data.data.username)
                localStorage.setItem('id', response.data.data.user_id)
                localStorage.setItem('login_id', response.data.data.login_id)

                if (response.data.data.role == 'Teacher') {
                    navigate('/teacherresp')
                }
                else {
                    navigate('/studentresp')
                }


            }).catch((error) => {

                toast.error(error.response.data.data, {
                    position: "bottom-center",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                console.log(error.response.data);

            })
            // console.log(response);
        }
    }


    return (
        <div>
            <>

                <Navbar />

                <div class="containerin">
                    <ToastContainer></ToastContainer>

                    <h1 className='in'>Log in</h1>
                    <form>
                        <table>
                            <tr>
                                <td>User Name </td>
                                <td>: <input className="textin" type="text" style={{ borderColor: Formerrors.username ? 'red' : '' }} onClick={() => { setFormerrors({ ...Formerrors, username: '' }) }} onChange={logindata} name="username" /></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>: <input className="textin" type="password" style={{ borderColor: Formerrors.password ? 'red' : '' }} onClick={() => { setFormerrors({ ...Formerrors, password: '' }) }} onChange={logindata} name="password" /></td>
                            </tr>
                        </table>

                        <center><input class="subin" type="submit" onClick={logined} value="Sign in" name="submit" /></center>
                    </form>
                    <center>
                        <a class="fff" href="/ForgotPassword">Forgot Password</a>
                        <p class="messagein">Don't have an account? </p>
                    </center>

                    

                    <center>
                        <a class="ccin" href="studentregistration">Student Register here</a>
                        <a class="ccin" href="teacherregistration">Teacher Register here</a>
                    </center>
                </div>
            </>
        </div>
    )
}
