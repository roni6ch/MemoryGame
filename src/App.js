import React, { Component } from 'react';
import Game from './components/Game';
import { Provider } from 'react-redux'
import store from './store/';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
     <Provider store={store}>
        <Game />
        </Provider>
      </div>
    );
  }
}



export default App;