export const combineReducers = reducers => (state = {}, action) =>
  Object.keys(reducers).reduce((memo, key) => {
    const reducer = reducers[key];
    const { [key]: substate } = state;
    const next = reducer(substate, action);
    return {
      ...memo,
      [key]: next,
    };
  }, {});

export default combineReducers;
