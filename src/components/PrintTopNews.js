import React from 'react'

function PrintTopNews({ topnews }){
  const topnewsData = topnews.topnews
  // console.log(topnews)
  // console.log('topnewsData',topnewsData)
  const  articles  = topnewsData.articles
  // const { title } = articles
  // console.log(articles)
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
