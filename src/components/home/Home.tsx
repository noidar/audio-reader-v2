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
    let content;
    if (this.props.loadingMeta.isLoading) {
      content = (
        <LoadingIndicator />
      )
    } else {
      const contentLi = this.props.books.map((el: BookListInterface) => {
        return <li key={el.id}><Link to={`/books/${el.id}`}>{el.name}</Link></li>
      });

      content = <ul>{contentLi}</ul>
    }
    return (
      <div className="Home">
        {content}
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

