import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  Link, Outlet } from "react-router-dom";



const MOVEID = 'https://api.themoviedb.org/3/movie'
const KEY = '?api_key=c45f6d5d61e66845ac8342820cc294e1'
export const MovieDetails = () => {

const {moviesId} = useParams()
const [movieId, setMovieId] = useState({})

useEffect(() => {
   
    async function fetchMoviesInfo () {
    
        console.log('moviesId', moviesId)
        try{
            const {data} = await axios.get(`${MOVEID}/${moviesId}${KEY}&language=en-US`)
            setMovieId(data)
           
        }catch(error) {
            console.log(error)
        }
    }
    fetchMoviesInfo ()
    
  }, [moviesId])

const {title, overview, genres,  poster_path} = movieId
console.log({genres})
    return <div>
        
        <button>Go back</button>
        <div>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  alt=''/>
        <h2>{title}</h2>
        </div>
       
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genre</h2>
       
       {genres && genres.map(({name, id}) => <p key={id}>{name} </p>)} 
       
       <div>
       <p>Additional information</p>
       <ul>
        <li>
            <Link to='cast'>Cast</Link>
        </li>
        <li>
            <Link to='review'>Review</Link>
        </li>
       </ul>
        </div>
       <Outlet/>

    </div>
    
}