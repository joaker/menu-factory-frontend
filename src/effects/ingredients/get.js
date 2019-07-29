import request from 'lib/request';

export const get = dispatch => () => {
  request
    .get('/ingredients')
    .then(response => {
      const {
        data: { ingredients },
      } = response;
      dispatch({
        type: 'SET_INGREDIENTS',
        payload: ingredients,
      });
    })
    .catch(error => {
      console.error('ingredients GET request failed: ', error);
      throw error;
    });
};

export default get;
