import React, { Component } from 'react';
import './App.css';
import MainApp from './app/components/MainApp';
import store from './redux/store';
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

export default App;
