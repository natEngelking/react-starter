import React from 'react';
import MoviesList from './MoviesList.js'
import SearchList from './SearchList.js'
import styles from '../main.css'
let movieList = [
  {title: 'Mean Girls', show: false},
  {title: 'Hackers', show: false},
  {title: 'The Grey', show: false},
  {title: 'Sunshine', show: false},
  {title: 'Ex Machina', show: false},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movieList,
      show: movieList.show,
      input: ''
    }
      this.clickSearch = this.clickSearch.bind(this);
      this.clickSubmit = this.clickSubmit.bind(this);

  }

  clickSearch (e) {
    //prevents the page from clearing the input on the refresh
    e.preventDefault();

    this.setState({input: e.target.value});

    // console.log(e.target.value);
    console.log(this.state.input);
  }

   clickSubmit (e, input) {
    // this.state.movie.show = true;
console.log(e)

    // <h3>Sorry your movie is not available</h3>

  };


  render(){
    return(
    <div>
      <h1 className = 'titleBorders'>Creation Station</h1>

      <h3>Search</h3>
       <SearchList movie={this.state.movie} input={this.state.input} clickSubmit={this.clickSubmit} clickSearch={this.clickSearch}/>


      <h2>Movies</h2>
      {this.state.movies.map((movie, i) =>
        <MoviesList key={i} movie={movie}/>
        )}

    </div>
  )}
}

export default App;
