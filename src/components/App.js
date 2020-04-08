import React from 'react';
import MovieList from './MovieList.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(props.MovieList.name);
    return(
    <div>
      Starter App component - hello there
    </div>
  )}
}

export default App;
