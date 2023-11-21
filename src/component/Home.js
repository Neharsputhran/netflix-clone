import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Grid } from '@mui/material'

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
        getMovie()
    }, [])

    console.log(movies)

    return (
        <div>
            <Grid container spacing={2} style={{paddingTop:"20px" ,paddingRight:"20px", paddingLeft:"20px"}}>
                {movies.map((movie) => {
                    return <Grid item xs={3}>
                        <Box>
                            <Card>
                                
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>


                                    </CardMedia>
                                
                            </Card>

                        </Box>
                    </Grid>
                })}
            </Grid>

        </div>
    )
}

export default Home