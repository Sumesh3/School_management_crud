import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div>
            <body className='bodyh'>
                <div class="outerh">
                    <div class="containerh">
                        <div><a class="homeh" href="/">Home</a></div>
                        <div><a class="trregistration" href="/teacherregistration">Teacher Registration</a></div>
                        <div><a class="stregistration" href="/studentregistration">Student Registration</a></div>
                        <div><a class="loginh" href="/login">Login</a></div>
                    </div>
                </div>
            </body>
        </div>
    )
}
