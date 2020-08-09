import {
  FETCH_SEARCHNEWS_REQUEST,
  FETCH_SEARCHNEWS_SUCCESS,
  FETCH_SEARCHNEWS_FAILURE,
} from '../actions/actionTypes'
  
const initialState = {
  loading: false,
  searchnews: {},
  error: ''
}
const searchnews = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCHNEWS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_SEARCHNEWS_SUCCESS:
      return {
        loading: false,
        searchnews: action.payload,
        error: ''
      }

    case FETCH_SEARCHNEWS_FAILURE:
      return {
        loading: false,
        searchnews: {},
        error: action.payload
    }
  
    default: return state
  
  }
}
  
export default searchnews;