import { useState } from "react";


export const Form = ({onSubmit}) => {
    const [moviesName, setMoviesName ] = useState('');

    const handleMoviesNameChange = evt => {
     
        setMoviesName(evt.currentTarget.value.toLowerCase())
        console.log(evt.currentTarget.value.toLowerCase())
       }
       const handleSubmit = event => {
      
        event.preventDefault();
        
        if(moviesName.trim() === '') {
            alert('do not name image')
            return;
        }
        console.log(moviesName)
        setMoviesName( '')       
        onSubmit(moviesName)
        // console.log('onSubmit', moviesName)
    }
    return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Search movies"   value={moviesName}
    onChange={handleMoviesNameChange}/>
    <button type="submit" >Search</button>
   
</form>}