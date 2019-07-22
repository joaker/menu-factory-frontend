import uuid from 'uuid/v1';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const INGREDIENT_SAVED = 'INGREDIENT_SAVED';

export const addIngredient = (name, description, id = uuid()) => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      name,
      description,
      id,
    },
  };
};

export const ingredientSaved = (tempId, id) => {
  return {
    type: INGREDIENT_SAVED,
    payload: {},
  };
};
