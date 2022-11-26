import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {  Link, Outlet } from "react-router-dom";



const MOVEID = 'https://api.themoviedb.org/3/movie'
const KEY = '?api_key=c45f6d5d61e66845ac8342820cc294e1'
export const MovieDetails = () => {
    const location = useLocation()

const {moviesId} = useParams()
const [movieId, setMovieId] = useState({})
const backLinkHref = location.state?.from ??'/movies';
 
console.log('backLinkHref', backLinkHref)

useEffect(() => {
   
    async function fetchMoviesInfo () {
    
        // console.log('moviesId', moviesId)
        try{
            const {data} = await axios.get(`${MOVEID}/${moviesId}${KEY}&language=en-US`)
            setMovieId(data)
           
        }catch(error) {
            console.log(error)
        }
    }
    fetchMoviesInfo ()
    
  }, [moviesId])

    const {title, overview, genres,  poster_path, release_date} = movieId
    // console.log(location.state)
    return <div>
        
        <Link to={backLinkHref} >Go back</Link>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  alt=''/>
          <h2>{title}  <span>({(release_date).slice(0, 4)})</span></h2>
        </div>
       
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genre</h2>
       
       {genres && genres.map(({name, id}) => <p key={id}>{name} </p>)} 
       
       <div>
         <p>Additional information</p>
         <ul>
           <li>
            <Link to='cast' state={ {from:backLinkHref}}>Cast</Link>
           </li>
           <li>
            <Link to='review' state={ {from:backLinkHref}}>Review</Link>
           </li>
         </ul>
        </div>
       <Outlet/>

    </div>
    
}