import request from 'lib/request';
import withLoading from 'lib/withLoading';

export const addMenu = payload => {
  return {
    type: 'ADD_MENU',
    payload,
  };
};

export const create = (dispatch, menu, setLoading) =>
  withLoading(
    setLoading,
    new Promise(resolve => {
      request.post('/menus', { menu }).then(({ id }) => {
        const savedMenu = { ...menu, id };
        dispatch(addMenu(savedMenu));
        resolve(savedMenu);
      });
    })
  );

export default create;
