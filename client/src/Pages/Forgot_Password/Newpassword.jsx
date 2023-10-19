import React, { useEffect, useState } from 'react'
import './Newpassword.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { ToastContainer, toast } from 'react-toastify'

export default function Newpassword() {
    const navigate = useNavigate()

    const [newpasswords, getnewpasswords] = useState({})
    const newpassword = (event) => {
        const name = event.target.name
        const value = event.target.value
        getnewpasswords({ ...newpasswords, [name]: value })

    }

    const savepassword = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/UpdatePasswordAPIView", newpasswords).then((response) => {
            console.log(response)
            Swal.fire(
                'Password updated successfully',
                '',
                'success'
              ).then(()=>{
                navigate('/login')
              })
            
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
    useEffect(() => {
        Swal.fire(
            'Password updated successfully',
            '',
            'success'
          )
    }, [])

    return (
        <div>
            <>
                <div class="containernew">
                    <ToastContainer />

                    <h1 className='change'>Change Password</h1>
                    <center>
                        <input class="textnew" type="password" name='pass' placeholder="New Password" onChange={newpassword}></input>
                        <input class="textnew" type="password" name='cpass' placeholder="Confirm New Password" onChange={newpassword}></input>
                    </center>
                    <center>
                        <button class="subnew" onClick={savepassword}>Save Password</button><br></br><br></br>
                    </center>

                </div>
            </>
        </div>
    )
}
