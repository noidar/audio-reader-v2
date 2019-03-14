import { Action } from 'redux'

export const bookListActions = {
  BOOK_LIST_SET_BOOK_LIST: 'BOOK_LIST_SET_BOOK_LIST',
  BOOK_LIST_BEGIN_LOADING: 'BOOK_LIST_BEGIN_LOADING',
  BOOK_LIST_END_LOADING: 'BOOK_LIST_END_LOADING',
}

export function loadBookList() {
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
