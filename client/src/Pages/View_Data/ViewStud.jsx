import React, { useEffect, useState } from 'react'
import './ViewStud.css'
import axios from 'axios'
import NavTeach from '../../Components/navbar/NavTeach'

export default function ViewStud() {

  const [stddata, getstddata] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/get_studentAPIView').then((response) => {
      getstddata(response.data.data)
    })
    .catch((error)=>{
console.log(error);
    })
  }, [])

  console.log(stddata);

  const deletee = (deleteid) => {
    console.log(deleteid);

    axios.delete(`http://127.0.0.1:8000/api/delete_studentAPIView/${deleteid}`).then((response) => {
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
                <th>Email</th>
                <th>Phone Number</th>
                <th>Place</th>
                <th>Post</th>
                <th>Pincode</th>
                <th>Password</th>
                <th>Action</th>
              </tr>

                <>
                  {
                    stddata.map((data, key) => (
                      <>
                        <tr>
                          <td>{key + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.phonenumber}</td>
                          <td>{data.place}</td>
                          <td>{data.post}</td>
                          <td>{data.pincode}</td>
                          <td>{data.password}</td>

                          <td>
                            <center>
                              <button className="btn btn-danger text-dark" onClick={() => { deletee(data.id) }}><a className="text-dark">Delete</a></button>
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
