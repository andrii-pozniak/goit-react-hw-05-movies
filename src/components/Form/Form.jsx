import { useState } from "react";
import { Box, Button } from "components/Form/Form.Style";


export const Form = ({onSubmit}) => {
    const [moviesName, setMoviesName ] = useState('');
    

    const handleMoviesNameChange = evt => {
     
        setMoviesName(evt.currentTarget.value.toLowerCase())
        // console.log(evt.currentTarget.value.toLowerCase())
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
    <Box type="text" placeholder="Search movies"   value={moviesName}
    onChange={handleMoviesNameChange}/>
    <Button type="submit" >Search</Button>
   
</form>}