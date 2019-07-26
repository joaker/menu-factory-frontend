import uuid from 'uuid/v1';
import createReducer from 'reducer/utils/createReducer';

export const initialState = {
  ingredients: [],
};

export const actionMap = {
  SET_INGREDIENTS: (state, action) => {
    const { payload: ingredients } = action;
    return {
      ...state,
      ingredients,
    };
  },
  ADD_INGREDIENT: (state, action) => {
    const { payload: entity } = action;
    const { id = uuid() } = entity;
    const last = state.ingredients || [];
    const next = [...last.filter(i => i.id !== id), { ...entity, id }];
    return {
      ...state,
      ingredients: next,
    };
  },
  REMOVE_INGREDIENT: (state, action) => {
    const { payload: id } = action;
    const last = state.ingredients || [];
    const next = last.filter(i => i.id !== id);
    return {
      ...state,
      ingredients: next,
    };
  },
};

export const reducer = createReducer(actionMap, initialState);

export default reducer;
