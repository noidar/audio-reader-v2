import { BookListsInterface } from './index.t';
import { bookListActions } from '../actions/book-list-actions';

const defaultState: BookListsInterface = {
  books: [],
  loadingMeta: {
    isLoading: 0,
    lastLoad: null,
  }
};

const configs = (state: BookListsInterface = defaultState, action: any): BookListsInterface => {
  switch (action.type) {
    case bookListActions.BOOK_LIST_BEGIN_LOADING: {
      const loadingMeta = Object.assign({}, state.loadingMeta);

      loadingMeta.isLoading += 1;

      return { ...state, loadingMeta };
    }
    case bookListActions.BOOK_LIST_END_LOADING: {
      const loadingMeta = Object.assign({}, state.loadingMeta);

      loadingMeta.isLoading -= 1;
      loadingMeta.lastLoad = new Date();
      return { ...state, loadingMeta };
    };
    case bookListActions.BOOK_LIST_SET_BOOK_LIST: {
      return { ...state, books: action.books };
    }
    default:
      return state
  }
}

export default configs;