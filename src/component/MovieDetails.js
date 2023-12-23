import { Button, Grid, TextField } from '@mui/material';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { auth, database } from '../firebase/setup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trailer from './Trailer';
import './css/MovieDetails.css';

function MovieDetails() {

    const [review, setReview] = useState("")
    const [reviewData, setReviewdata] = useState([])

    const location = useLocation();



    const movieRef = doc(database, "Movies", `${location.state.movie.id}`)
    const reviewRef = collection(movieRef, "Review")

    const addReview = async () => {
        try {
            auth.currentUser && await addDoc(reviewRef, {
                movieReview: review,
                email: auth.currentUser?.email,
                name: auth.currentUser?.displayName,
                profile_image: auth.currentUser?.photoURL


            })
            auth.currentUser ? toast.success("Review Added", {
                theme: "dark"
            })
                : toast.warn("Please Sign In")

        } 
        catch (error) {
            console.error(error)
        }

    }
    useEffect(() => {
        showReview()
    })
    const showReview = async () => {
        try {
            const data = await getDocs(reviewRef)
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setReviewdata(filteredData)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='detailsmovie'>
            <Grid container>
                <Grid item  xs={8}>
                    <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),URL(https://image.tmdb.org/t/p/original${location.state.movie?.poster_path})`, height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                        <ToastContainer autoClose={2000} />
                        <div style={{ paddingTop: "200px", paddingLeft: "30px", paddingRight: "10px", fontFamily: "initial", display: "flex", flexDirection: "column" }}>


                            <h1 className="movieTitle">{location.state.movie?.original_title}</h1>

                            <div style={{ display: "flex" }}>
                                <h4 style={{ color: "white", textAlign: "left", marginRight: "20px" }}>Language: {location.state.movie?.original_language}</h4>
                                <h4 style={{ color: "white", textAlign: "left" }}>Release date: {location.state.movie?.release_date}</h4>

                            </div>


                            <h3 className='desc'>{location.state.movie?.overview}</h3>
                            {/* <Button variant='contained' style={{color:"black",backgroundColor:"white"}}>Play Trailer</Button> */}
                            <Trailer location={location} movieId={location.state.movie.id}/>

                        </div>

                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='reviewBox'>
                        <Grid container>

                            <div>
                                <h4 style={{ color: "#a4a4a4", textAlign: "left", fontWeight: "500" }}>ADD REVIEW</h4>
                                <TextField className='textfield' onChange={(e) => setReview(e.target.value)} size="small" label="Review" variant='outlined'/>
                                <Button className='submitButton' onClick={addReview} variant='contained' sx={{ml:"10px",mt:"10px", bgcolor: "red", color: "white" }}>Submit</Button>
                            </div>

                        </Grid>

                        <div style={{marginTop:"30px"}}>
                            <h4 className='review' >REVIEW</h4>

                            {reviewData.map((each) => {
                                return <>
                                    <div style={{ display: "flex" }}>
                                        <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={each.profile_image} />
                                        <li style={{ color: "grey", textAlign: "left", fontWeight: "400", listStyle: "none", marginLeft: "10px", fontSize:"15px" }}> {each.name}</li>
                                    </div>
                                    <p style={{ color: "grey", fontWeight: "400", textAlign: "left" }}>Review : {each.movieReview}</p>
                                </>
                            })}
                        </div>
                    </div>

                </Grid>

            </Grid>
        </div>
    )
}

export default MovieDetails
