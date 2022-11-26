import { useState, useEffect } from "react";
import axios from "axios";
import {  Link, useLocation } from "react-router-dom";

const MAIN_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=c45f6d5d61e66845ac8342820cc294e1'

export const Home = () => {
   const [movieIds, setMovieIds] = useState([]);
   const location = useLocation()
   useEffect(() => {
 async function fetchMainImage() {
    try{
        const {data} = await axios.get(`${MAIN_URL}`)
        setMovieIds(data.results)
        // console.log(data.results)
    } catch(error) {
        console.log(error)
    }
    
}
fetchMainImage()
   }, [])
    return <main>
         <ul>
            {movieIds.map(({id, title}) =>            
              <li key={id}>
              <Link to={`movies/${id}`} state={ {from:location}}>
                {title}</Link>
              </li>
           )}
         </ul>
    </main>
}