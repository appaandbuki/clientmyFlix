import {PropTypes}  from 'prop-types';

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} />
        </div>
        <div>
          <h2>Title: {movie.title} </h2>
        </div>
        <p> Movie Description: {movie.description} </p>
        <p> Genre: {movie.genre.name}</p> 
        <p> Genre Description: {movie.genre.description} </p>
        <div>
          <h2>Director: {movie.director.name}</h2>
          <p>Director Bio: {movie.director.bio}</p>
          <p>Director Birth: {movie.director.birth}</p>
        </div>
        <button onClick={onBackClick} >Back</button>
      </div>
    );
  };

  MovieView.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };