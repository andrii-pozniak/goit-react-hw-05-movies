import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "components/Form/Form";
import {  Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Ul, Li,Page } from "./Movies.Style";
import { BsImage } from "react-icons/bs";
const NAME_URL = 'https://api.themoviedb.org/3/search/movie?api_key=c45f6d5d61e66845ac8342820cc294e1'

export const Movies = () => {
    const [movies, setMovies ] = useState([]);
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const nameMovie = searchParams.get('query') ?? '';
    
     const handleFormSubmit = (nameMovie) => {
       
        setSearchParams(nameMovie !== '' ? {query: nameMovie} : {})
  }
  useEffect(() => {
    if(nameMovie.trim() === '') {
       
        return;
    }
    
   async function fetchMoviesName () {
    
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
        {movies && <div> <Ul>
            {movies.map(({id, title, poster_path}) =>
              <Li key={id}>
              <Link to={`${id}`} state={ {from:location}}>
            {poster_path?<img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width='200' height='300' alt={title}/>:<BsImage width='200' height='300'/>}

               <Page><b>{title}</b></Page> </Link>
              </Li>
           )} </Ul>
        </div>}
        <Outlet/>
      
      
    </div>
}