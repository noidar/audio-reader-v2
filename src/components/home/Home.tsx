import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { RouteComponentProps } from "react-router";

type PathParamsType = {
  param1: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
  someString: string,
}

class Home extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <Link to={`/books/1`}>Components</Link>
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => ({ ...state.audio })

const mapDispatchToProps = {};


export default withRouter(
  connect<any, any>(
    mapStateToProps,
    mapDispatchToProps
  )(Home))

