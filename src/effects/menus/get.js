import request from 'lib/request';

export const get = dispatch => () => {
  request
    .get('/menus')
    .then(response => {
      const {
        data: { menus },
      } = response;
      dispatch({
        type: 'SET_MENUS',
        payload: menus,
      });
    })
    .catch(error => {
      console.error('menus GET request failed: ', error);
      throw error;
    });
};

export default get;
