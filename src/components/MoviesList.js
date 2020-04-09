import React from 'react';
import styles from '../main.css';

let MoviesList = (props) => (
    <div>
      {props.movie.show ? <h3 className='titleBorders'>Movie Title: {props.movie.title}</h3> : null}
    </div>
  );
export default MoviesList;
