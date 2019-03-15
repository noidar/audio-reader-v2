import { BookListsInterface } from './index.t';
import { bookListActions } from '../actions/book-list-actions';

// is more elegant way to destructure rather to  acces property via dot operator :)
const {
  BOOK_LIST_BEGIN_LOADING,
} = bookListActions;

const defaultState: BookListsInterface = {
  books: [],
  loadingMeta: {
    isLoading: 0,
    lastLoad: null,
  }
};

// is desireble to have a error message per store prop
// like so { errors: action.error ? action.payload.message : null }

const configs = (state: BookListsInterface = defaultState, action: any): BookListsInterface => {
  switch (action.type) {
    case BOOK_LIST_BEGIN_LOADING: {
      return {
        ...state,
        loadingMeta: {
        isLoading: state.loadingMeta.isLoading += 1
        }
      };
    }
    case bookListActions.BOOK_LIST_END_LOADING: {
      return {
        ...state,
        loadingMeta: {
        isLoading: state.loadingMeta.isLoading -= 1,
        lastLoad: new Date()
        }
      };
    };
    case bookListActions.BOOK_LIST_SET_BOOK_LIST: {
      return { ...state, books: action.books };
    }
    default:
      return state
  }
}

export default configs;