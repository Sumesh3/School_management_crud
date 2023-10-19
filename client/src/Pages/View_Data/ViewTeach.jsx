import React, { useEffect, useState } from 'react'
import './ViewStud.css'
import axios from 'axios'
import NavTeach from '../../Components/navbar/NavTeach'

export default function ViewTeach() {

    const [teadata, getteadata] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get_teacherAPIView').then((response) => {
            getteadata(response.data.data)
        })
    }, [])

    console.log(teadata);

    const deletee = (deleteid) => {
        console.log(deleteid);

        axios.delete(`http://127.0.0.1:8000/api/delete_teacherAPIView/${deleteid}`).then((response) => {
            console.log(response);
            window.location.reload()
        })
    }

    return (
        <>
            <div className='ssd'>
                <NavTeach></NavTeach>
            </div>
            <div className='aaassd'>
                <center>
                    <div className="containervi1">
                        <center>
                        </center><table className="table table-bordered" border={1} cellPadding={20} cellSpacing={0}>
                            <tbody><tr>
                                <th>Sl.No</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Subject</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                                <>
                                    {
                                        teadata.map((data, key) => (
                                            <>
                                                <tr>
                                                    <td>{key + 1}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.username}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.phonenumber}</td>
                                                    <td>{data.address}</td>
                                                    <td>{data.subject}</td>
                                                    <td>{data.password}</td>
                                                    <td>
                                                        <center>
                                                            <button className="btn btn-danger text-dark"><a className="text-dark" onClick={() => { deletee(data.id) }}>Delete</a></button>
                                                        </center>
                                                    </td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                </>

                            </tbody></table>
                    </div>
                </center>
            </div>
        </>
    )
}
