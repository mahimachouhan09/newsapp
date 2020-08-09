import {
  FETCH_SEARCHNEWS_REQUEST,
  FETCH_SEARCHNEWS_SUCCESS,
  FETCH_SEARCHNEWS_FAILURE,
  FETCH_TOPNEWSHEADLINES_REQUEST,
  FETCH_TOPNEWSHEADLINES_SUCCESS,
  FETCH_TOPNEWSHEADLINES_FAILURE,
  BOOKMARK_ITEM,
  UNBOOKMARK_ITEM,
  API_KEY
} from './actionTypes'
  
export const fetchSearchNews = (searchnews) => {
  return (dispatch) => {
    dispatch(getSearchRequest())
    fetch(`https://newsapi.org/v2/everything?q=${searchnews}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const searchnews = data
      dispatch(getSearchSuccess(searchnews))
    })
    .catch(error => {
      dispatch(getSearchFailure(error.message))
    })
  }
}
  
export const getSearchRequest = () => {
  return {
    type: FETCH_SEARCHNEWS_REQUEST
  }
}
  
export const getSearchSuccess = searchnews => {
  return {
    type: FETCH_SEARCHNEWS_SUCCESS,
    payload: searchnews
  }
}
  
export const getSearchFailure = error => {
  return {
    type: FETCH_SEARCHNEWS_FAILURE,
    payload: error
  }
}

export const fetchTopNewsHeadlines = () => {
  return (dispatch) => {
    dispatch(getTopNewsHeadlinesRequest())
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const topnews = data
      console.log(topnews)
      dispatch(getTopNewsHeadlinesSuccess(topnews))
    })
    .catch(error => {
      dispatch(getTopNewsHeadlinesFailure(error.message))
    })
  }
}
  
export const getTopNewsHeadlinesRequest = () => {
  return {
    type: FETCH_TOPNEWSHEADLINES_REQUEST
  }
}
  
export const getTopNewsHeadlinesSuccess = topnews => {
  return {
    type: FETCH_TOPNEWSHEADLINES_SUCCESS,
    payload: topnews
  }
}
  
export const getTopNewsHeadlinesFailure = error => {
  return {
    type: FETCH_TOPNEWSHEADLINES_FAILURE,
    payload: error
  }
}


export function bookmarkItem(item){
  return{
    type: BOOKMARK_ITEM,
    payload : item
  }
}
  
export function unBookmarkItem(item){
  return {
    type: UNBOOKMARK_ITEM,
    payload: item
  }
}
  