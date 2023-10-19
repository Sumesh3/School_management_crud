import React, { useState } from 'react'
import './StudentReg.css'
import Navbar from '../../Components/navbar/Navbar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function StudentReg() {
    const [inputs, getInputs] = useState({
        name: "", email: "", phonenumber: "", place: "", post: "", pincode: "", password: ""
    })

    const [registrerrors, setregistrerrors] = useState({})
    console.log(registrerrors);


    const submitaction = (event) => {
        const name = event.target.name
        const value = event.target.value
        getInputs({ ...inputs, [name]: value })
        console.log(inputs);
    }

    const validate = (value) => {
        let error = {}
        let namer = /^([a-zA-z. ]{0,40})?$/
        let any = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
        let numb = /^([0-9]{0,10})?$/
        let placer = /^([A-Za-z, .]{0,40})?$/
        let pinc = /^([0-9]{0,6})?$/

        if (!value.name) {
            error.name = '*Enter Your Name'
        }
        else if (!namer.test(value.name)) {
            error.name = 'Enter the valid Name'
        }

        if (!value.email) {
            error.email = '*Enter Your E-mail address'
        }
        else if (!any.test(value.email)) {
            error.email = 'Enter the valid E-mail address'
        }

        if (!value.phonenumber) {
            error.phonenumber = '*Enter Your Phonenumber'
        }
        else if (!numb.test(value.phonenumber)) {
            error.phonenumber = 'Enter the valid Phonenumber'
        }
        console.log(numb.test(value.phonenumber));

        if (!value.place) {
            error.place = '*Field Cannot Be Null'
        }
        else if (!placer.test(value.place)) {
            error.place = 'Enter the valid Place name'
        }

        if (!value.post) {
            error.post = '*Field Cannot Be Null'
        }
        else if (!placer.test(value.post)) {
            error.post = 'Enter the valid Post office name'
        }

        if (!value.pincode) {
            error.pincode = '*Enter Your Pincode'
        }
        else if (!pinc.test(value.pincode)) {
            error.pincode = 'Enter the valid Pincode'
        }

        if (!value.password) {
            error.password = '*Enter Your Password'
        }

        return error
    }

    const submit = (event) => {
        event.preventDefault()
        setregistrerrors(validate(inputs))
        if (Object.keys(registrerrors).length === 0) {
            axios.post("http://127.0.0.1:8000/api/StudentRegisterAPIView", inputs).then((response) => {

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

            })
                .catch((error) => {
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
        <div>
            <>
                <Navbar />


                <div class="containerst">
                    <ToastContainer></ToastContainer>
                    <h1 className='head'>Student Registration Form</h1>
                    <form>
                        <table>
                            <tr>
                                <td className='tdfield'>Name *</td>
                                <td className='tdfield'>: <input className="textst" type="text" style={{ borderWidth: registrerrors.name ? '2px' : '', borderColor: registrerrors.name ? 'red' : '' }} onClick={() => { setregistrerrors({ ...registrerrors, name: '' }) }} name="name" onChange={submitaction} /></td>
                            </tr>
                            <tr>
                                <td className='tdfield'> </td>
                                <td className='nameerr'><span>{registrerrors.name}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfield'>Email *</td>
                                <td className='tdfield'>: <input className="textst" type="email" style={{ borderWidth: registrerrors.email ? '2px' : '', borderColor: registrerrors.email ? 'red' : '' }} onClick={() => { setregistrerrors({ ...registrerrors, email: '' }) }} name="email" onChange={submitaction} /></td>
                            </tr>
                            <tr>
                                <td className='tdfield'> </td>
                                <td className='nameerr'><span>{registrerrors.email}</span></td>
                            </tr>

                            <tr>
                                <td className='tdfield'>Phonenumber *</td>
                                <td className='tdfield'>: <input className="textst" type="text" style={{ borderWidth: registrerrors.phonenumber ? '2px' : '', borderColor: registrerrors.phonenumber ? 'red' : '' }} onClick={() => { setregistrerrors({ ...registrerrors, phonenumber: '' }) }} name="phonenumber" onChange={submitaction} /></td>
                            </tr>
                            <tr>
                                <td className='tdfield'> </td>
                                <td className='nameerr'><span>{registrerrors.phonenumber}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfield'>Place *</td>
                                <td className='tdfield'>: <input className="textst" type="text" style={{ borderWidth: registrerrors.place ? '2px' : '', borderColor: registrerrors.place ? 'red' : '' }} onClick={() => { setregistrerrors({ ...registrerrors, place: '' }) }} name="place" onChange={submitaction} /></td>
                            </tr>
                            <tr>
                                <td className='tdfield'> </td>
                                <td className='nameerr'><span>{registrerrors.place}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfield'>Post *</td>
                                <td className='tdfield'>: <input className="textst" type="text" style={{ borderWidth: registrerrors.post ? '2px' : '', borderColor: registrerrors.post ? 'red' : '' }} onClick={() => { setregistrerrors({ ...registrerrors, post: '' }) }} name="post" onChange={submitaction} /></td>
                            </tr>
                            <tr>
                                <td className='tdfield'> </td>
                                <td className='nameerr'><span>{registrerrors.post}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfield'>Pincode *</td>
                                <td className='tdfield'>: <input className="textst" type="text" style={{ borderWidth: registrerrors.pincode ? '2px' : '', borderColor: registrerrors.pincode ? 'red' : '' }} onClick={() => { setregistrerrors({ ...registrerrors, pincode: '' }) }} name="pincode" onChange={submitaction} /></td>
                            </tr>
                            <tr>
                                <td className='tdfield'> </td>
                                <td className='nameerr'><span>{registrerrors.pincode}</span></td>
                            </tr>
                            <tr>
                                <td className='tdfield'>Password *</td>
                                <td className='tdfield'>: <input className="textst" type="password" style={{ borderWidth: registrerrors.password ? '2px' : '', borderColor: registrerrors.password ? 'red' : '' }} onClick={() => { setregistrerrors({ ...registrerrors, password: '' }) }} name="password" onChange={submitaction} /></td>
                            </tr>
                            <tr>
                                <td className='tdfield'> </td>
                                <td className='nameerr'><span>{registrerrors.password}</span></td>
                            </tr>
                        </table>

                        <center><input class="subst" type="submit" onClick={submit} value="Submit" name="submit" onChange={submitaction} /></center>
                    </form>
                    <p class="message">Already have an account? <a class="cc" href="/login">Login here</a></p>
                </div>
            </>
        </div>
    )
}
