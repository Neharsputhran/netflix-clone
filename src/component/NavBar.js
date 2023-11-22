import React, { useState, useEffect } from 'react'
import logonetflix from "../images/logonetflix.png"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/setup';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trailer from './Trailer';

function NavBar() {

    const logOut = async () => {
        try {
            await signOut(auth)
            toast.success("Logged out successfully", {
                theme: "dark"
            })

        } catch (error) {
            console.error(error)
        }

    }

    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const getMovie = () => {

        try {

            fetch('https://api.themoviedb.org/3/movie/popular?api_key=eeb4459ec0266f4380d3ade482bf2ea2')
                .then(res => res.json())
                .then(json => setMovies(json.results))
        } catch (err) {


            console.error(err)
        }

    }
    const signInClick = () => {

        navigate("/SignIn");

    }


    useEffect(() => {
        getMovie()

    }, [])

    console.log(movies[0])
    console.log(auth?.currentUser?.email)


    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),URL(https://image.tmdb.org/t/p/original${movies[3]?.poster_path})`,
            backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "600px", width: "100%"
        }}>
            <ToastContainer autoClose={2000} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                <img style={{ width: "100px", height: "90px" }} src={logonetflix} />
                <div>
                    {
                        auth?.currentUser?.emailVerified ? <Button onClick={logOut} varient='contained' sx={{ height: "40px", padding: "20px", color: "white", backgroundColor: "red" }}>Logout</Button>
                            : <Button onClick={signInClick} varient='contained' sx={{ height: "40px", padding: "20px", color: "white", marginLeft: "10px", backgroundColor: "red" }}>Signin</Button>
                    }

                </div>

            </div>
            <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                <h1 style={{ color: "#f1f1f1", fontSize: '70px', textAlign: "left", fontFamily: "initial" }}>{movies[3]?.original_title}</h1>
                <h3 style={{ color: "#f1f1f1", textAlign: "left", fontWeight: "normal" }}>{movies[3]?.overview}</h3>
                {/* <Button variant='contained' sx={{ width: "150px", fontWeight: "bold", color: "black", bgcolor: "white", }}>Play Trailer</Button> */}
                <Trailer movieId={movies[3]?.id}/>
            </div>
        </div>
    )
}

export default NavBar;