import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { database } from '../firebase/setup'

function Home() {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eeb4459ec0266f4380d3ade482bf2ea2');
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    const addMovie = async (movie) => {
        const movieRef = doc(database, "Movies", `${movie.id}`);
        try {
            await setDoc(movieRef, {
                movieName: movie.original_title
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div style={{ backgroundColor: "#181818" }}>
            <Grid container spacing={2} style={{ paddingTop: "20px", paddingRight: "20px", paddingLeft: "20px" }}>
                {movies.map((movie) => {
                    addMovie(movie);
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <Box>
                                <Link to="/MovieDetails" state={{ movie: movie }}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt={movie.original_title}
                                            height={200} // Set the desired height
                                            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Card>
                                </Link>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Home;
