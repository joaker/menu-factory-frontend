import React, { createContext, useReducer } from 'react';
import reducer from 'reducer';

export const initialState = reducer();

export const Context = createContext(initialState);

export const Provider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const defaultMap = () => ({});

const createConnectProps = (
  mapState = defaultMap,
  mapDispatch = defaultMap
) => (state, dispatch) => ({
  ...mapState(state),
  ...mapDispatch(dispatch),
  dispatch,
});

export const connect = (mapState, mapDispatch) => Component => {
  const connectProps = createConnectProps(mapState, mapDispatch);
  return ({ children, ...props }) => (
    <Context.Consumer>
      {({ state, dispatch }) => (
        <Component {...props} {...connectProps(state, dispatch)}>
          {children}
        </Component>
      )}
    </Context.Consumer>
  );
};

export default Context;
