import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './index.module.css';

const addIngredient = (name, description) => {
  return {
    type: 'ADD_INGREDIENT',
    payload: {
      name,
      description,
    },
  };
};

export const createHandleChange = (values, setValues) => name => ({
  target: { value },
}) => {
  setValues({
    ...values,
    [name]: value,
  });
};

const initialValues = {
  name: '',
  description: '',
};

export const AddIngredient = () => {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();
  const handleChange = createHandleChange(values, setValues);
  const { name, description } = values;
  return (
    <form className={styles.ingredient}>
      <TextField label="name" value={name} onChange={handleChange('name')} />
      <TextField
        label="description"
        value={description}
        onChange={handleChange('description')}
      />
      <Button
        disabled={!name}
        onClick={() => {
          setValues(initialValues);
          dispatch(addIngredient(name, description));
        }}
      >
        Add
      </Button>
    </form>
  );
};

export default AddIngredient;
