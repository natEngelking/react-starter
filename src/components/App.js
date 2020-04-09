import React from 'react';
import MoviesList from './MoviesList.js'
import SearchList from './SearchList.js'
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
      movies: movieList,
      title:movieList.title
    }
  }

  clickSearch (movies) {
    this.setState({
      movies: movies,
      input: ''
    });
  }

  render(){
    return(
    <div>
      <h1 className = 'titleBorders'>Creation Station</h1>

      <h3>Search</h3>
       <SearchList movie={this.state.movies} clickSearch={this.clickSearch.bind(this)}/>



      <h2>Movies</h2>
      {this.state.movies.map((movie, i) =>
        <MoviesList key={i} movie={movie}/>
        )}

    </div>
  )}
}

export default App;
