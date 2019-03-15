import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { RouteComponentProps } from "react-router";

import { BookListsInterface, BookListInterface } from '../../reducers/index.t';
import { loadBookList } from '../../actions/book-list-actions';
import LoadingIndicator from '../../ui/loader-indicator';

type PathParamsType = {
  param1: string,
}
interface DispatchProps {
  loadBookList: () => void;
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & BookListsInterface & DispatchProps

class Home extends Component<PropsType> {

  componentDidMount() {
    if (!this.props.loadingMeta.lastLoad) {
      this.props.loadBookList();
    }
  }

  render() {
    const { loadingMeta, books } = this.props;

    const booksListContent = (booksList: any) => booksList.map((el: BookListInterface) => 
     <li key={el.id}><Link to={`/books/${el.id}`}>{el.name}</Link></li>
    );

    // for loading I reversed in boolean type, need to find a better solution to track loading indicator
    return (
      <div className="Home">
       {!!loadingMeta.isLoading && <LoadingIndicator /> }
       <ul>
        {books && booksListContent(books)}
       </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any): BookListsInterface => ({ ...state.bookList })

const mapDispatchToProps = {
  loadBookList,
};

export default withRouter(
  connect<BookListsInterface, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Home))

