import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "components/Form/Form";
import {  Link, Outlet, useLocation, useSearchParams } from "react-router-dom";

const NAME_URL = 'https://api.themoviedb.org/3/search/movie?api_key=c45f6d5d61e66845ac8342820cc294e1'

export const Movies = () => {
    // const [moviesName, setMoviesName ] = useState('');
    const [movies, setMovies ] = useState([]);
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const nameMovie = searchParams.get('query') ?? '';
    //  console.log('nameMovie', nameMovie)
     const handleFormSubmit = (nameMovie) => {
        // setMoviesName(nameMovie)
        setSearchParams(nameMovie !== '' ? {query: nameMovie} : {})
        // console.log('moviesName nm', nameMovie)
        // setMovies([]    
  }
  useEffect(() => {
    if(nameMovie.trim() === '') {
        // console.log('moviesName', nameMovie)
        // alert('do not name image')
        return;
    }
    // console.log('moviesName', nameMovie)
   async function fetchMoviesName () {
    
    // console.log('nameMovie', nameMovie)
    try{
        const {data} = await axios.get(`${NAME_URL}&language=en-US&page=1&query=${nameMovie}`)
        setMovies(data.results)
       
    }catch(error) {
        console.log(error)
    }

    }
    fetchMoviesName ()
    
  }, [nameMovie])

    return <div>
       <Form onSubmit={handleFormSubmit}/>
        {movies && <div> <ul>
            {movies.map(({id, title}) =>
              <li key={id}>
              <Link to={`${id}`} state={ {from:location}}>
                {title}</Link>
              </li>
           )} </ul>
        </div>}
        <Outlet/>
      
      
    </div>
}