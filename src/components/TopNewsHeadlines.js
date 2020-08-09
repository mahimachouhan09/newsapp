import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTopNewsHeadlines } from '../actions/index'
import TopNewsContainer from '../containers/TopNewsContainer';

export class TopNewsHeadlines extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTopNewsHeadlines()
  }

  render() {
    return (
      <div>
        <h2>Top News Headlines</h2>
        <TopNewsContainer />
      </div>
    )
  }
}

export default connect(null , { fetchTopNewsHeadlines })(TopNewsHeadlines)
