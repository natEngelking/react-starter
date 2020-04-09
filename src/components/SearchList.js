import React from 'react'

class SearchList extends React.Component {
  constructor (props) {
    super(props);
    console.log(props.input)
  }

  render () {
    return (
    <div>
      <form className = 'searchForm'>
          <label>
          <input type='text' title='title' placeholder='Find Your Favorites' value={this.props.input} onChange={this.props.clickSearch}/>
          </label>
          <input  type='submit' value='Search Movies' onClick={this.props.clickSubmit}/>
        </form>
    </div>
    );
  }
}

export default SearchList;