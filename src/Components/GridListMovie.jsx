import { ItemMovie } from "./ItemMovie";

import PropTypes from 'prop-types'

//Componente de la Lista de peliculas
export const GridListMovie = ({movies}) => {    

  return (    
    <>
        <br></br>
        <br></br>
        <h4>POPULARES</h4>
        
        <div className="row">
            {
                movies.map((movie) => (
                    <ItemMovie key={movie.id} movie={movie}></ItemMovie>
                ))
            }
        </div>

    </>
  )
}

GridListMovie.propTypes = {
    movies: PropTypes.array.isRequired
}

//Definir valor de parametros por defecto
GridListMovie.defaultProps = {
    movies: null
}