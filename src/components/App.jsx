import { Routes, Route} from "react-router-dom";
import { Home } from "components/pages/Home";
import { Layout } from "components/pages/Layout";
import { Movies } from "components/pages/Movies";
import { Cast } from "components/Cast/Cast";
import { Review } from "components/Review/Review";


import { MovieDetails } from "components/MovieDetails/MovieDetails";

// import { MovieDetails } from "components/MovieDetails/MovieDetails";
// import { Container, Header, Link} from "./App.Styled";

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
