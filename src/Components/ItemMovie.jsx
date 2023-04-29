import PropTypes from 'prop-types'

//Componente que pinta el Card de cada pelicula
export const ItemMovie = ({movie}) => {

    const imgUrl = 'https://image.tmdb.org/t/p/w200';

    let content;
    if(movie.poster == null){
        content = <figure className="figure">
                    <svg className="bd-placeholder-img figure-img img-fluid" width="400" height="600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>                    
                </figure>
    }else{
        content = <img src={`${imgUrl + movie.poster}`} className="card-img-top" alt={movie.title} />
    }

  return (
    <div className="col-md-3 mb-3 text-center">
        <div className="card shadow" style={{width: 250 + 'px'}}>
            { content }
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>                
            </div>
        </div>
    </div>
  )
}

ItemMovie.propTypes = {
    movie: PropTypes.object.isRequired
}