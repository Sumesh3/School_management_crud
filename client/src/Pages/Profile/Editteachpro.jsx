import React, { useEffect, useState } from 'react'
import './Editteachpro.css'
import axios from 'axios';

export default function Editteachpro() {
    // console.log(teacherdata);


    const Editteacher = (event) => {
        const name = event.target.name
        const value = event.target.value
        getEditteach({ editteach, [name]: value })
    }

    const [editteach, getEditteach] =  useState({})
    const id = localStorage.getItem('id')

    useEffect(() => {
        axios.put(`http://127.0.0.1:8000/api/update_teacherAPIView/${id}`).then((response)=>{
            getEditteach(response.data.data);
        })
    }, [])

    console.log(editteach);

    const update = () => {
        axios.put(`http://127.0.0.1:8000/api/update_teacherAPIView/${id}`, editteach).then((response)=>{
            window.location.reload()
        })
    }

    return (
        <div>
            <div class="wrapperr">
                <a href="#demo-modall">Edit Profile</a>
            </div>
            <center>
                <div id="demo-modall" className='modal'>
                    <div className="profile-containert1">
                        <img className="profile-picturet1" src='/Assets/Images/Teacher-avathar.jpeg' />
                        <div className="user-infot1">
                            <h1 className="user-namet1">
                                <input type='text' className='text2' name='name' value={editteach.name} onChange={Editteacher}></input>
                            </h1>
                            <p className="user-rolet1">Teacher</p>
                        </div>
                        <div className="user-contactt1">
                            <div className="contact-itemt1"><i className="fas fa-envelope" /> Email
                                <span className='textspan'>: <input type='text' className='text3' name='email' value={editteach.email}></input></span>
                            </div>
                            <div className="contact-itemt1"><i className="fas fa-phone" /> Phone
                                <span className='textspan'>: <input type='text' className='text3' name='phonenumber' value={editteach.phonenumber} onChange={Editteacher}></input></span>
                            </div>
                            <div className="contact-itemt1"><i className="fas fa-map-marker-alt" /> Address
                                <span className='textspan'>: <input type='text' className='text3' name='address' value={editteach.address} onChange={Editteacher}></input></span>
                            </div>
                            <div className="contact-itemt1"><i class="fas fa-map-marker" aria-hidden="true"></i> Pincode
                                <span className='textspan'>: <input type='text' className='text3' name='pincode' value={editteach.pincode} onChange={Editteacher}></input></span>
                            </div>
                            <div className="contact-itemt1"><i class="fa fa-book" aria-hidden="true"></i> Subject
                                <span className='textspan'>: <input type='text' className='text3' name='subject' value={editteach.subject} onChange={Editteacher}></input></span>
                            </div><br></br>
                            <center>
                                <button className="editbuttont1" onClick={update}><a href="#" class="close">Update Profile</a></button>
                            </center>
                        </div>
                        <a href="#" class="modal__close">&times;</a>
                    </div>
                </div>
            </center>
        </div>
    )
}
