import { Routes, Route} from "react-router-dom";
import { lazy } from "react";
import { Home } from "pages/Home/Home";
import { Layout } from "pages/Layout";
// import { Movies } from "pages/Movies/Movies";
// import { Cast } from "components/Cast/Cast";
import { Review } from "components/Review/Review";
// import { MovieDetails } from "components/MovieDetails/MovieDetails";
    
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));



export const App = () => {
  return (      
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/movies" element={<Movies/>}/>
          <Route path="movies/:moviesId" element={<MovieDetails/>}>
           <Route path="review" element={<Review/>}/>
            <Route path="cast" element={<Cast/>}/>
            </Route>         
       </Route>               
     </Routes>
  
    
  );
};
