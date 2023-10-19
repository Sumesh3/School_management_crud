import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import './TeacherReg.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TeacherReg() {
    const [teachinputs, getteachInputs] = useState({
        name: "",  pincode: "", email: "", phonenumber: "", address: "", subject: "", password: ""
    })

    const [tregistererrors, settregistererrors] = useState({})
    console.log(tregistererrors);

    const teachdetails = (event) => {
        const name = event.target.name
        const value = event.target.value
        getteachInputs({ ...teachinputs, [name]: value })
    }
    const validate = (value) => {
        let error = {}
        let nameval = /^([a-zA-z. ]{0,40})?$/
        let emailval = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
        let pinval = /^([0-9]{0,6})?$/
        let numval = /^([0-9]{0,10})?$/

        let pass = /^([a-zA-z0-9@]{5,15})?$/

        if (!value.name) {
            error.name = '*Enter Your Name'
        }
        else if (!nameval.test(value.name)) {
            error.name = 'Enter the valid Name'
        }

        if (!value.pincode) {
            error.pincode = '*Enter Your Pincode'
        }
        else if (!pinval.test(value.pincode)) {
            error.pincode = 'Enter the valid Pincode'
        }

        if (!value.email) {
            error.email = '*Enter Your Email'
        }
        else if (!emailval.test(value.email)) {
            error.email = 'Enter the valid E-mail address'
        }

        if (!value.phonenumber) {
            error.phonenumber = '*Enter Your Phonenumber'
        }
        else if (!numval.test(value.phonenumber)) {
            error.phonenumber = 'Enter the valid Phonenumber'
        }

        if (!value.address) {
            error.address = '*Enter Your Address'
        }
        if (!value.subject) {
            error.subject = '*Enter Your Subject'
        }
        else if (!nameval.test(value.subject)) {
            error.subject = '*Enter the valid Subject'
        }

        if (!value.password) {
            error.password = '*Enter Your Password'
        }
        else if (!pass.test(value.password)) {
            error.password = 'Must be atleast 5 characters'
        }

        return error
    }

    const finalsubmit = (event) => {
        event.preventDefault()
        settregistererrors(validate(teachinputs))
        if (Object.keys(tregistererrors).length === 0) {
            axios.post("http://127.0.0.1:8000/api/TeacherRegisterAPIView", teachinputs).then((response) => {
                console.log(response)
                toast.success(response.data.message, {
                    position: "bottom-center",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                
            }).catch((error) => {
                console.log(error.response.data.message);
                toast.error(error.response.data.message, {
                    position: "bottom-center",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            })
        }
        
    }

    return (
        <div className='eee'>
            <>
                <Navbar />

                <div class="containertg">
                    <ToastContainer />
                    <h1 className='tg'>Teacher Registration Form</h1>
                    <form>
                        <table>
                            <tr>
                                <td className='tdfields'>Name</td>
                                <td className='tdfields'>: <input className="texttg" style={{ borderWidth: tregistererrors.name ? '2px' : '', borderColor: tregistererrors.name ? 'red' : '' }} onClick={() => { settregistererrors({ ...tregistererrors, name: '' }) }} onChange={teachdetails} type="text" name="name" /></td>
                            </tr>
                            <tr>
                                <td className='tdfields'> </td>
                                <td className='nameerro'><span>{tregistererrors.name}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfields'>Email</td>
                                <td className='tdfields'>: <input className="texttg" onChange={teachdetails} type="email" style={{ borderWidth: tregistererrors.email ? '2px' : '', borderColor: tregistererrors.email ? 'red' : '' }} onClick={() => { settregistererrors({ ...tregistererrors, email: '' }) }} name="email" /></td>
                            </tr>
                            <tr>
                                <td className='tdfields'> </td>
                                <td className='nameerro'><span>{tregistererrors.email}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfields'>Phonenumber</td>
                                <td className='tdfields'>: <input className="texttg" onChange={teachdetails} type="text" style={{ borderWidth: tregistererrors.phonenumber ? '2px' : '', borderColor: tregistererrors.phonenumber ? 'red' : '' }} onClick={() => { settregistererrors({ ...tregistererrors, phonenumber: '' }) }} name="phonenumber" /></td>
                            </tr>
                            <tr>
                                <td className='tdfields'> </td>
                                <td className='nameerro'><span>{tregistererrors.phonenumber}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfields'>Address</td>
                                <td className='tdfields'>: <input className="texttg" onChange={teachdetails} type="text" style={{ borderWidth: tregistererrors.address ? '2px' : '', borderColor: tregistererrors.address ? 'red' : '' }} onClick={() => { settregistererrors({ ...tregistererrors, address: '' }) }} name="address" /></td>
                            </tr>
                            <tr>
                                <td className='tdfields'> </td>
                                <td className='nameerro'><span>{tregistererrors.address}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfields'>Pincode</td>
                                <td className='tdfields'>: <input className="texttg" onChange={teachdetails} type="text" style={{ borderWidth: tregistererrors.pincode ? '2px' : '', borderColor: tregistererrors.pincode ? 'red' : '' }} onClick={() => { settregistererrors({ ...tregistererrors, pincode: '' }) }} name="pincode" /></td>
                            </tr>
                            <tr>
                                <td className='tdfields'> </td>
                                <td className='nameerro'><span>{tregistererrors.pincode}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfields'>Subject</td>
                                <td className='tdfields'>: <input className="texttg" onChange={teachdetails} type="text" style={{ borderWidth: tregistererrors.subject ? '2px' : '', borderColor: tregistererrors.subject ? 'red' : '' }} onClick={() => { settregistererrors({ ...tregistererrors, subject: '' }) }} name="subject" /></td>
                            </tr>
                            <tr>
                                <td className='tdfields'> </td>
                                <td className='nameerro'><span>{tregistererrors.subject}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfields'>Password</td>
                                <td className='tdfields'>: <input className="texttg" onChange={teachdetails} type="password" style={{ borderWidth: tregistererrors.password ? '2px' : '', borderColor: tregistererrors.password ? 'red' : '' }} onClick={() => { settregistererrors({ ...tregistererrors, password: '' }) }} name="password" /></td>
                            </tr>
                            <tr>
                                <td className='tdfields'> </td>
                                <td className='nameerro'><span>{tregistererrors.password}</span></td>
                            </tr>
                        </table>

                        <center><input class="subtg" type="submit" onClick={finalsubmit} value="Submit" name="submit" /></center>
                    </form>
                    <p class="messagetg">Already have an account? <a class="cctg" href="/login">Login here</a></p>
                </div>
            </>
        </div>
    )
}
