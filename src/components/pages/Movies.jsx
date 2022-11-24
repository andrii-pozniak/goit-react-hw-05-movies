import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "components/Form/Form";
import {  Link, Outlet } from "react-router-dom";

const NAME_URL = 'https://api.themoviedb.org/3/search/movie?api_key=c45f6d5d61e66845ac8342820cc294e1'

export const Movies = () => {
    const [moviesName, setMoviesName ] = useState('');
    const [movies, setMovies ] = useState([]);
   

     const handleFormSubmit = (moviesName) => {
        setMoviesName(moviesName)
        console.log('moviesName nm', moviesName)
        // setMovies([])
    
  }
  useEffect(() => {
    if(moviesName.trim() === '') {
        console.log('moviesName', moviesName)
        // alert('do not name image')
        return;
    }

   async function fetchMoviesName () {
    
    console.log('moviesName', moviesName)
    try{
        const {data} = await axios.get(`${NAME_URL}&language=en-US&page=1&query=${moviesName}`)
        setMovies(data.results)
       
    }catch(error) {
        console.log(error)
    }

    }
    fetchMoviesName ()
    
  }, [moviesName])

    return <div>
       <Form onSubmit={handleFormSubmit}/>
        {movies && <div> <ul>
            {movies.map(({id, title}) =>
              <li key={id}>
              <Link to={`${id}`} >
                {title}</Link>
              </li>
           )} </ul>
        </div>}
        <Outlet/>
      
      
    </div>
}