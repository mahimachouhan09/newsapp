import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchNews } from '../actions/index'
import SearchNewsContainer from '../containers/SearchNewsContainer';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchnews : ''
    }
  }

  onInputChange = (event) => this.setState({ searchnews: event.target.value }) 

  onFormSubmit = event => {
    event.preventDefault()
    this.props.fetchSearchNews(this.state.searchnews)
    this.setState({
      searchnews : ''
    })
  }
  render() {
    return (
      <div>
        <form className ='search-form' onSubmit = {this.onFormSubmit}>
          <input className = 'search-form-input' type = 'text'
          placeholder = 'search news'
          value = { this.state.searchnews }
          onChange = { this.onInputChange}
          />
          <button className= 'search-form-button' type= 'submit'>search</button>
        </form>
        <SearchNewsContainer />
      </div>
    )
  }
}

export default connect(null , { fetchSearchNews })(SearchBar)
