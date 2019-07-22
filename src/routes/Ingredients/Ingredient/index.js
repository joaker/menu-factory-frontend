import React from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Card';
import Field from 'components/Field';
import styles from './index.module.css';

const removeIngredient = id => {
  return {
    type: 'REMOVE_INGREDIENT',
    payload: id,
  };
};

export const Ingredient = ({ id, name, description, remove }) => {
  const dispatch = useDispatch();
  return (
    <Paper data-id={id} className={styles.ingredient}>
      <Field name="name" value={name} />
      <Field name="description" value={description} />
      <button onClick={() => dispatch(removeIngredient(id))}>x</button>
    </Paper>
  );
};

export default Ingredient;
