import React from 'react'
import logonetflix from "../images/logonetflix.png"

import { signInWithPopup } from 'firebase/auth'
import { Button } from '@mui/material'
import { auth, googleauth } from '../firebase/setup'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


function SignIn() {
    const navigate = useNavigate();

    const googlesignin = async () => {
        try {

            await signInWithPopup(auth, googleauth)
            setTimeout(() => {
                auth?.currentUser?.emailVerified && navigate("/")
            },2000)
            toast.success("Signed in succesfully")

        } catch (error) {
            console.error(error)

        }

    }
    console.log(auth?.currentUser?.email)

    return (
        <div style={{ backgroundColor: "#181818", height: "100vh", display: "flex", flexDirection: "column", padding: "20px" }}>
            <ToastContainer autoClose={2000} />
            <img style={{ height: "100px", width: "100px" }} src={logonetflix} />
            <div style={{ position: "fixed", left: "45%", top: "35%", display: "flex", flexDirection: "column" }}>
                <Button style={{ width: "100px" }} onClick={googlesignin} variant='contained' color='error'>SignIn</Button>
                <h1 style={{ color: "white", textAlign: "left" }}>Let's start <br />to explore movie<br /> from here</h1>
            </div>
        </div>
    )
}

export default SignIn