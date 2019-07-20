export const defaultHandler = state => state;

export const INIT = '@INIT';

export const createReducer = (actionMap, initialState) => (
  state = initialState,
  action = { type: INIT }
) => {
  if (!actionMap) throw new Error('empty action maps are not allowed');
  if (!action || !action.type) {
    throw new Error(`types require actions: ${JSON.stringify(action)}`);
  }
  const handler = actionMap[action.type] || defaultHandler;
  const next = handler(state, action);
  return next;
};

export default createReducer;
