import React, { useEffect, useState } from 'react'
import './Editstdpro.css'
import axios from 'axios'

export default function Editstdpro() {

    const Editstudent = (event) => {
        const name = event.target.name
        const value = event.target.value
        getEditstd({ editstd, [name]: value })
    }


    const [editstd, getEditstd] = useState({})
    const id = localStorage.getItem('id')

    useEffect(() => {
        axios.put(`http://127.0.0.1:8000/api/update_studentAPIView/${id}`).then((response) => {
            getEditstd(response.data.data);
        })
    }, [])

    console.log(editstd);
    

    const update = () => {
        axios.put(`http://127.0.0.1:8000/api/update_studentAPIView/${id}`, editstd).then((response) => {
          console.log(response);
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
                    <div className="profile-container1">
                        <img className="profile-picture1" src='/Assets/Images/Student-avathar.jpeg' />
                        <div className="user-info1">
                            <h1 className="user-name1"><input type='text' className='text2' name='name' value={editstd.name} onChange={Editstudent}></input></h1>
                            <p className="user-role1">Student</p>
                        </div>
                        <div className="user-contact1">
                            <div className="contact-item1"><i className="fas fa-envelope" /> Email
                                <span className='textspan'>: <input type='text' className='text3' name='email' value={editstd.email}></input></span>
                            </div>
                            <div className="contact-item1"><i className="fas fa-phone" /> Phone
                                <span className='textspan'>: <input type='text' className='text3' name='phonenumber' value={editstd.phonenumber} onChange={Editstudent}></input></span>
                            </div>
                            <div className="contact-item1"><i className="fas fa-map-marker-alt" /> Place
                                <span className='textspan'>: <input type='text' className='text3' name='place' value={editstd.place} onChange={Editstudent}></input></span>
                            </div>
                            <div className="contact-item1"><i className="fas fa-map-pin" /> Post
                                <span className='textspan'>: <input type='text' className='text3'  name='post' value={editstd.post} onChange={Editstudent}></input></span>
                            </div>
                            <div className="contact-item1"><i className="fas fa-map-marker" /> Pin Code
                                <span className='textspan'>: <input type='text' className='text3' name='pincode' value={editstd.pincode} onChange={Editstudent}></input></span>
                            </div><br></br>
                            <center>
                                <button className="editbuttonn" onClick={update}><a href="#" class="close">Update Profile</a></button>
                            </center>
                        </div>
                        <a href="#" class="modal__close">&times;</a>
                    </div>
                </div>
            </center>
        </div>


    )
}
