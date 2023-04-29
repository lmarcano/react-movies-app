import { useEffect, useState } from "react";
import { getSearchMovies } from "../Helpers/getSearchMovies";

export const useFetchMovies = (keyValue) => {
    
    const apiUrl = 'https://api.themoviedb.org/3';
    const apiKey = '7235ad522320c2a19e61532f23dc428a';
    const type = keyValue ? 'search' : 'discover';
    const url = `${apiUrl}/${type}/movie?api_key=${apiKey}&language=en-US&query=${keyValue}&page=1&include_adult=false`;

    //variable de estado para Movies, usada porque se envia a otro componente y este cambia su estado
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);    

    console.log('COMPONENTE ENTRO', keyValue);


    //funcion que consume la API
    const getMovies = async() => {
        const mov = await getSearchMovies(url);
        setMovies(mov);
        setIsLoading(false);
    }    
    
    //getMovies();

    //creamos el usseEffect
    useEffect(() => {
        
        getMovies();                

    },[keyValue]);


    return {
        movies,
        isLoading
    }
}
