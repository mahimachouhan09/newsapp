import {
  FETCH_TOPNEWSHEADLINES_REQUEST,
  FETCH_TOPNEWSHEADLINES_SUCCESS,
  FETCH_TOPNEWSHEADLINES_FAILURE,
} from '../actions/actionTypes'
  
const initialState = {
  loading: false,
  topnews: {},
  error: ''
}
const topnews = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPNEWSHEADLINES_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_TOPNEWSHEADLINES_SUCCESS:
      return {
        loading: false,
        topnews: action.payload,
        error: ''
      }

    case FETCH_TOPNEWSHEADLINES_FAILURE:
      return {
        loading: false,
        topnews: {},
        error: action.payload
    }
    default: return state
  }
}
  
export default topnews;