import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Provider, Context } from './context';
import Router from './router.js';
import './App.css';

function App() {
  const { dispatch } = useContext(Context);
  useEffect(
    () => {
      dispatch({
        type: 'APP_MOUNTED',
      });
    },
    [dispatch]
  );
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default () => (
  <Provider>
    <Container>
      <App />
    </Container>
  </Provider>
);
