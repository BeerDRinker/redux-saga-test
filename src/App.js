import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchDog  } from './actions/dogActions'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <button
            onClick={() => this.props.fetchDog()}
          >Get dog</button>
          {
            this.props.loading
            ?
            <div><p>Loading... </p></div>
            : this.props.error
              ? <div><p>Error, try again</p></div>
              : <img src={this.props.url} alt={this.props.url}/>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  url: state.dogReducer.url,
  loading:state.dogReducer.loading,
  error: state.dogReducer.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
