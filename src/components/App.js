import React, { Component } from 'react'
import SearchBar from './SearchBar'
import TopNewsHeadlines from './TopNewsHeadlines'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchNewsContainer from '../containers/SearchNewsContainer';
import Bookmark from './Bookmark';
import BookmarkList from './BookmarkList';

export class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <nav>
            <ul className = 'nav-links'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bookmarks">Bookmarks</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route exact path="/" >
            <SearchBar />
            <TopNewsHeadlines  />
          </Route>
          <Route path="/bookmarks" component = {BookmarkList} ></Route>
        </Switch>
      </div>
    </Router>     
    )
  }
}

export default App
