import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Card';
import request from 'lib/request';
import Field from 'components/Field';
import Loading from 'components/Loading';
import styles from './index.module.css';

const removeIngredient = id => {
  return {
    type: 'REMOVE_INGREDIENT',
    payload: id,
  };
};

export const Ingredient = ({ id, name, description, remove }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <Paper data-id={id} className={styles.ingredient}>
      <Field name="name" value={name} />
      <Field name="description" value={description} />
      <button
        onClick={() => {
          setLoading(true);
          request.delete(`/ingredients/${id}`).then(() => {
            dispatch(removeIngredient(id));
            setLoading(false);
          });
        }}
      >
        x
      </button>
      <Loading show={loading} />
    </Paper>
  );
};

export default Ingredient;
