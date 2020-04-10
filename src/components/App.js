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
      show: movieList[0].show,
      input: ''
    }
      this.clickSearch = this.clickSearch.bind(this);
      this.clickSubmit = this.clickSubmit.bind(this);
  }

  clickSearch (e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

   clickSubmit (e, input) {
    e.preventDefault();
    //loop
console.log(this.state.show)
console.log(this.state.input)

    movieList.forEach(title) {
      if (this.state.input.toLowerCase() === movieList[i].title.toLowerCase()) {
        this.setState({show: (movieList[i].show === true)})
      }
    };
console.log(this.show)

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
