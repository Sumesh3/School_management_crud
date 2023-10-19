import React, { useEffect, useState } from 'react'
import './Profileteach.css'
import Editteachpro from './Editteachpro'
import axios from 'axios'
import NavTeach from '../../Components/navbar/NavTeach'

export default function Profileteach() {
    const [views, getviews] = useState({})

    const id = localStorage.getItem('id')
    console.log(id);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/SingleTeacherAPTView/${id}`).then((response) => {
            getviews(response.data);
        })
    }, [])

    console.log(views);



    return (
        <>
        <div className='navvv'>
            <NavTeach></NavTeach>
        </div>
        <div className='qqqt'>
            <div className="profile-containert">
                <img className="profile-picturet" src='/Assets/Images/Teacher-avathar.jpeg'/>
                <div className="user-infot">
                    <h1 className="user-namet">{views.name}</h1>
                    <p className="user-rolet">{views.role}</p>
                </div>
                <div className="user-contactt">
                    <div className="contact-itemt"><span className='contact002'><i className="fas fa-envelope" /> Email </span>
                    <span className='contact0032'>: {views.email}</span></div>
                    <div className="contact-itemt"><span className='contact002'><i className="fas fa-phone" /> Phone </span>
                    <span className='contact0033'>: {views.phonenumber}</span></div>
                    <div className="contact-itemt"><span className='contact002'><i className="fas fa-map-marker-alt" /> Address </span>
                    <span className='contact0034'>: {views.address}</span></div>
                    <div className="contact-itemt"><span className='contact002'><i className="fas fa-map-marker" /> Pincode </span>
                    <span className='contact0031'>: {views.pincode}</span></div>
                    <div className="contact-itemt"><span className='contact002'><i className="fas fa-map-pin" /> Subject </span>
                    <span className='contact0035'>: {views.subject}</span></div>
                    <center>
                        <button className="editbuttont"><Editteachpro /></button>
                    </center>
                </div>
            </div>
        </div>
        </>
    )
}
