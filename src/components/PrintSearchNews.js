import React from 'react'
import '../App.css';
import Bookmark from './Bookmark';

function PrintSearchNews({ searchnews ,bookmarkItem , bookmarkItems ,unBookmarkItem }) {
  const searchnewsData = searchnews.searchnews   
  return searchnews.loading ? (
    <h2>loading Page</h2>) : searchnews.error ? ( <h2> {searchnews.error}</h2> ) :
      (   
        <ul>  
          {searchnewsData.articles && searchnewsData.articles.map((value,id) => 
          <div>
            <img className='img ' src ={value.urlToImage} width="100" height="100" />
            <a href = {value.url} >
            <li className= 'text'> {value.title.trim()}</li> </a>
            <Bookmark 
              bookmarkItem = {bookmarkItem} 
              unBookmarkItem = {unBookmarkItem}
              key = {id} 
              item ={value}
              bookmarkItems = {bookmarkItems} />
          </div>
          )}
        </ul>
      )
};

export default PrintSearchNews
