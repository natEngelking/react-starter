import React from 'react';
import styles from '../main.css';

let MoviesList = (props) => {

  return (
    <div>
      <h3 className = 'titleBorders'> Movie Title: {props.movie.title}</h3>
    </div>

  )

}

export default MoviesList;
