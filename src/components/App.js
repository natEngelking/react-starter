import React from 'react';
import MoviesList from './MoviesList.js'
import styles from '../main.css'
let movieList = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movieList

    }
  }

  render(){
    return(
    <div>
      <h1 className = 'titleBorders'>Creation Station</h1>

      {this.state.movies.map((movie, i) =>
        <MoviesList key={i} movie={movie} />
        ) }
    </div>
  )}
}

export default App;
