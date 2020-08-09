import { connect } from 'react-redux';
import { fetchTopNewsHeadlines } from '../actions/index';
import PrintTopNews from '../components/PrintTopNews';

const mapStateToProps = state => {
  return {
    topnews: state.topnews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTopNewsHeadlines: () => dispatch(fetchTopNewsHeadlines())
  }
}
export default connect( mapStateToProps,mapDispatchToProps )(PrintTopNews)