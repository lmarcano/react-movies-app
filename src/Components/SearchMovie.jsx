import { useState } from "react"

import PropTypes from 'prop-types';

//Componente Input Text, que devuelve el texto escrito al padre para realizar una busqueda luego
export const SearchMovie = ({onSearch}) => {

    //variable de estado
    const [inputValue, setInputValue] = useState('');

    //evento del input que retorna lo escrito
    const onInputChange =({target})=>{
        setInputValue(target.value);
    }

    //funcion Submit del formulario
    const onSubmit = (event) => {
        event.preventDefault();

        onSearch(inputValue);
        setInputValue('');
    }    

  return (
    <form className="input-group" onSubmit={onSubmit}>
        
        <input 
            type="text"
            className="form-control"
            data-testid="txSearch"
            placeholder="Escriba el nombre de la pelicula"
            value={inputValue}
            width={40}
            onChange={onInputChange}>
        </input>
        <button onClick={onSubmit} type="button" className="btn btn-primary">Buscar</button>

    </form>
  )
}

//Config de prop types para definir el tipo y hacer obligatorio el envio del parametro onSearch
SearchMovie.propTypes = {
    onSearch: PropTypes.func.isRequired
}