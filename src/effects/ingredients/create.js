import request from 'lib/request';
import withLoading from 'lib/withLoading';
export const addIngredient = payload => {
  return {
    type: 'ADD_INGREDIENT',
    payload,
  };
};

export const create = (dispatch, ingredient, setLoading) =>
  withLoading(
    setLoading,
    new Promise(resolve => {
      request.post('/ingredients', { ingredient }).then(({ id }) => {
        const savedIngredient = { ...ingredient, id };
        dispatch(addIngredient(savedIngredient));
        resolve(savedIngredient);
      });
    })
  );

export default create;
