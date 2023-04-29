import { useState } from "react";
import { GridListMovie } from "./Components/GridListMovie";
import { SearchMovie } from "./Components/SearchMovie";
import { useFetchMovies } from "./hooks/useFetchMovies";

//Componente Padre
export const MovieApp = () => {
    
    const [keyValue, setKeyValue] = useState();
    const {movies, isLoading} = useFetchMovies(keyValue);

    //callback Search Key
    const onSearchKey = (keyValue) => {     
        setKeyValue(keyValue);        
    }    

  return (
    <>
        <div className="container mt-3">
            <h1>Movie App</h1>
            
            {/* Componente que recibe un callback con el valor deveulto */}
            <SearchMovie onSearch={(key)=>onSearchKey(key)}></SearchMovie>
            
            <GridListMovie movies={movies}></GridListMovie>
            {/* {content} */}
        </div>        
    </>    
  )
}
