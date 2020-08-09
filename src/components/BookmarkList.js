import React from 'react';
import { connect } from 'react-redux';
import Bookmark from './Bookmark';

const BookmarkList = ({ bookmarkItems}) => {
  return (
    <div>
      <p>Bookmarks</p>
      <p> {bookmarkItems.length === 0 ? (<h5> You have {bookmarkItems.length} Bookmarks(s) </h5>
        ) : (
        <h5> {bookmarkItems.length} Bookmarks(s)</h5>
        )}
      </p>
      { bookmarkItems.map((item, i) => (
        <Bookmark key={i} item={item} title= {item.title} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  bookmarkItems: state.bookmarks.bookmarkItems,
});

export default connect( mapStateToProps, null )(BookmarkList);