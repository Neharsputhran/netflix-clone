import React, {useState, useEffect} from 'react'


function NavBar() {

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

    console.log(movies[0])

  return (
    <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movies[3].poster_path})` ,backgroundPosition:"center" ,backgroundRepeat:"no-repeat" ,backgroundSize:"cover" ,height:"400px" ,width:"100%"}}>

    </div>
  )
}

export default NavBar