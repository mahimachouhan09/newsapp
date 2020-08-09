import React, { Component } from 'react'
import SearchBar from './SearchBar'
import TopNewsHeadlines from './TopNewsHeadlines'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookmarkList from './BookmarkList';

export class App extends Component {
  render() {
    return (
      <Router>
        <div >
        <h3 className = 'main-heading'>News website</h3> 
          <nav>
            <ul className = 'nav-ul'>
              <li>
                <Link className = 'nav-ul-links' to="/">Home</Link>
              </li>
              <li>
                <Link className = 'nav-ul-links' to="/bookmarks">Bookmarks</Link>
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
