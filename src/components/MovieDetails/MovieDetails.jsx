import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation } from "react-router-dom";
import {  Link, Outlet } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr"

import { Section, 
    Card, Details, 
    Title, Page, GenresName, 
    BackButton, Item } from "components/MovieDetails/MovieDetails.Style";

const MOVEID = 'https://api.themoviedb.org/3/movie'
const KEY = '?api_key=c45f6d5d61e66845ac8342820cc294e1'

 const MovieDetails = () => {
    const location = useLocation()

const {moviesId} = useParams()
const [movieId, setMovieId] = useState({})
const backLinkHref = location.state?.from ??'/movies';
 
console.log('backLinkHref', backLinkHref)

useEffect(() => {
   
    async function fetchMoviesInfo () {
    
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
    
    return <Section>
        <div>
         <Link to={backLinkHref} ><BackButton><GrLinkPrevious/> Go back</BackButton></Link>
          <Card>
         <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width='280' alt={title}/>
        
          <Details>
        <Title>{title}  <span>({release_date?.slice(0, 4)})</span></Title>
        <Title>Overview</Title>
        <Page>{overview}</Page>
        <Title>Genre</Title>
       <GenresName>
       {genres && genres.map(({name, id}) => <Page key={id}>{name} </Page>)} 
       </GenresName>
      
         </Details>
         </Card>
             <Item>
         <Page>Additional information</Page>
         <div>
         <ul>
           <li>
            <Link to='cast' state={ {from:backLinkHref}}>Cast</Link>
           </li>
           <li>
            <Link to='review' state={ {from:backLinkHref}}>Review</Link>
           </li>
         </ul>
         </div>
         
              </Item>
        </div>
        <Suspense>
         <Outlet/>
        </Suspense>
    </Section>
    
}
export default MovieDetails;