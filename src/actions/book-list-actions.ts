import { Action } from 'redux'


// as a ideea you could describe more readeble actions

// BOOKS_LIST_GET: '[BOOK_LIST] Get books list';
// BOOKS_LIST_SUCCES: '[BOOK_LIST] Get books list succes';
// BOOKS_LIST_FAILD: '[BOOK_LIST] Get books list faild';

// TODO create a middleware for handle promise, like so
// store.dispatch({ type: ASYNC_START, subtype: action.type });
// store.dispatch({ type: ASYNC_END, promise: action.payload });


export const bookListActions = {
  BOOK_LIST_SET_BOOK_LIST: 'BOOK_LIST_SET_BOOK_LIST',
  BOOK_LIST_BEGIN_LOADING: 'BOOK_LIST_BEGIN_LOADING',
  BOOK_LIST_END_LOADING: 'BOOK_LIST_END_LOADING',
}

const loadBookList = () => {
  return (dispatch: any) => {
    dispatch({ type: bookListActions.BOOK_LIST_BEGIN_LOADING });
    fetch('/book-list.json')
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then(function (response) {
        dispatch({ type: bookListActions.BOOK_LIST_END_LOADING });
        dispatch({ type: bookListActions.BOOK_LIST_SET_BOOK_LIST, books: response });
      })
      .catch(err => {
        dispatch({ type: bookListActions.BOOK_LIST_END_LOADING });
      });
  }
}

 // is more elegant to know right the way what you exporting not to search on whole file
export {
  loadBookList,
}