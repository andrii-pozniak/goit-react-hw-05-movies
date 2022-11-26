import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  Outlet } from "react-router-dom";

const REVIEW = 'https://api.themoviedb.org/3/movie'
const KEY = '?api_key=c45f6d5d61e66845ac8342820cc294e1'

export const Review = () => {
    const {moviesId} = useParams()
    const [reviews, setReviews] = useState([])
    // console.log('reviews', moviesId)
    useEffect(() => {   
        async function fetchReviewsInfo () {
        
            // console.log('reviews', moviesId)
            try{
                const {data} = await axios.get(`${REVIEW}/${moviesId}/reviews${KEY}&language=en-US`)
                setReviews(data)
                // console.log({data})
            }catch(error) {
                console.log(error)
            }
        }
        fetchReviewsInfo ()
        
      }, [moviesId]) 
    //   console.log({reviews})

    return <div>
<ul>
{reviews.results && reviews.results.map(({content, id, author}) => <li key={id}>
    <p><b>author:{author}</b> </p>
    <p>{content}</p></li>)}

</ul>
    
<Outlet/>
    </div>
}