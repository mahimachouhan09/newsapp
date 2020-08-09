import { connect } from 'react-redux';
import { fetchSearchNews ,bookmarkItem,unBookmarkItem} from '../actions/index';
import PrintSearchNews from '../components/PrintSearchNews';

const mapStateToProps = state => {
  return {
    searchnews: state.searchnews,
    bookmarkItems : state.bookmarks.bookmarkItems

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchNews: (searchnews) => dispatch(fetchSearchNews(searchnews)),
    bookmarkItem : (items) => dispatch(bookmarkItem(items)),
    unBookmarkItem : (items) => dispatch(unBookmarkItem(items))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrintSearchNews)