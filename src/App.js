import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import store from 'store';
import Router from './router.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <div className="App">
          <Router />
        </div>
      </Container>
    </Provider>
  );
}

export default App;
