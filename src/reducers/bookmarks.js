import {
  BOOKMARK_ITEM,
  UNBOOKMARK_ITEM,
} from '../actions/actionTypes';

const initialState = {
  bookmarkItems: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case BOOKMARK_ITEM:
      return {
        ...state,
        bookmarkItems: [payload, ...state.bookmarkItems]
      };
    case UNBOOKMARK_ITEM:
      return {
        ...state,
        bookmarkItems: state.bookmarkItems.filter(
          item => item.title !== payload.title
        )
      };
    default:
      return state;
  }
};