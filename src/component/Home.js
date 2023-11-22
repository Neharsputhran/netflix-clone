import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { database } from '../firebase/setup'

function Home() {
    const [movies, setMovies] = useState([])
    const getMovie = () => {

        try {

            fetch('https://api.themoviedb.org/3/movie/popular?api_key=eeb4459ec0266f4380d3ade482bf2ea2')
                .then(res => res.json())
                .then(json => setMovies(json.results))
        } catch (err) {


            console.error(err)
        }

    }

    useEffect(() => {
        getMovie();
    }, [])
    const addMovie = async (movie)=>{
        const movieRef = doc(database,"Movies",`${movie.id}`)
        try{
            await setDoc(movieRef,{
                movieName:movie.original_title
            })
        }
        catch(error){
            console.error(error);
        }
        
    }

    console.log(movies)

    return (
        <div style={{backgroundColor:"#181818"}}>
            <Grid container spacing={2} style={{paddingTop:"20px" ,paddingRight:"20px", paddingLeft:"20px"}}>
                {movies.map((movie) => {
                    {addMovie(movie)}
                    return <Grid item xs={3}>
                        <Box>
                            <Link to="/MovieDetails" state={{movie:movie}}>
                            <Card>
                                
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}>


                                    </CardMedia>
                                
                            </Card>
                            </Link>

                        </Box>
                    </Grid>
                })}
            </Grid>

        </div>
    )
}

export default Home