import React, { useEffect, useState } from 'react'
import './Profilestd.css'
import Editstdpro from './Editstdpro'
import axios from 'axios'
import Navprofile from '../../Components/navbar/Navprofile'

export default function Profilestd() {
    const [viewpro, getviewpro] = useState({})
    const id = localStorage.getItem('id')

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/SingleStudentAPTView/${id}`).then((response)=>{
            getviewpro(response.data);
        })
    }, [])
    console.log(viewpro);



    
    return (
        <>
        <div className='navv'>
            <Navprofile/>
        </div>
        
        <div className='qqq'>
            <div className="profile-container">
                <img className="profile-picture" src='/Assets/Images/Student-avathar.jpeg'/>
                <div className="user-info">
                    <h1 className="user-name">{viewpro.name}</h1>
                    <p className="user-role">{viewpro.role}</p>
                </div>
                <div className="user-contact">
                    <div className="contact-item"><span className='contact11'><i className="fas fa-envelope" /> Email </span>
                    <span className='contact121'>: {viewpro.email}</span></div>
                    <div className="contact-item"><span className='contact11'><i className="fas fa-phone" /> Phone </span>
                    <span className='contact122'>: {viewpro.phonenumber}</span></div>
                    <div className="contact-item"><span className='contact11'><i className="fas fa-map-marker-alt" /> Place </span>
                    <span className='contact123'>: {viewpro.place}</span></div>
                    <div className="contact-item"><span className='contact11'><i className="fas fa-map-pin" /> Post </span>
                    <span className='contact124'>: {viewpro.post}</span></div>
                    <div className="contact-item"><span className='contact11'><i className="fas fa-map-marker" /> Pin Code </span>
                    <span className='contact125'>: {viewpro.pincode}</span></div>
                    <center>
                        <button className="editbutton"><Editstdpro/></button>
                    </center>
                </div>
            </div>
        </div>
        </>
    )
}
