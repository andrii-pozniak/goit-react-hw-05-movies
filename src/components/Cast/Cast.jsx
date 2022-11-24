import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  Outlet } from "react-router-dom";
const CAST = 'https://api.themoviedb.org/3/movie'
const KEY = '?api_key=c45f6d5d61e66845ac8342820cc294e1'

export const Cast = () => {
    const {moviesId} = useParams()
    const [casts, setCast] = useState([])
    useEffect(() => {
   
        async function fetchCastInfo () {
        
            console.log('moviesId', moviesId)
            try{
                const {data} = await axios.get(`${CAST}/${moviesId}/credits${KEY}&language=en-US`)
                setCast(data)
               
            }catch(error) {
                console.log(error)
            }
        }
        fetchCastInfo ()
        
      }, [moviesId])

    //   if(casts.name === {}){
    //     return
    //   }
    
console.log({casts})
 return <div><ul>
       {casts.name && casts.map(({name, profile_path, id}) => <li key={id}>
        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt=''/>
        <p>{name}</p>
    </li>)}
 </ul>
   
    <Outlet/>
 </div>

}