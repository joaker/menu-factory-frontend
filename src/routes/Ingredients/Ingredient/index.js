import React from 'react';
import Paper from '@material-ui/core/Card';
import connect from 'hoc/connect';
import Field from 'components/Field';
import styles from './index.module.css';

const removeIngredient = id => {
  return {
    type: 'REMOVE_INGREDIENT',
    payload: id,
  };
};

export const Ingredient = ({ id, name, description, remove }) => (
  <Paper data-id={id} className={styles.ingredient}>
    <Field name="name" value={name} />
    <Field name="description" value={description} />
    <button onClick={() => remove(id)}>x</button>
  </Paper>
);

export const mapDispatch = (dispatch, { id }) => ({
  remove: () => dispatch(removeIngredient(id)),
});

export default connect(
  undefined,
  mapDispatch
)(Ingredient);
