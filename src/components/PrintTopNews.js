import React from 'react'

function PrintTopNews({ topnews }){
  const topnewsData = topnews.topnews
  const  articles  = topnewsData.articles
  return topnews.loading ? (
    <h2> loading Page</h2> ) : topnews.error ? ( <h2> { topnews.error }</h2> ) :
      (   
        <ul>
          { articles && articles.map(value =>
            <a href = {value.url} ><h4>{value.title}</h4></a>) } 
        </ul>
      )
};

export default PrintTopNews
