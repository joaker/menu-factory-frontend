import React, { useContext, useState } from 'react';
import connect from 'hoc/connect';
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

export const AddIngredient = ({ addIngredient }) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = createHandleChange(values, setValues);
  const { name, description } = values;
  return (
    <form className={styles.ingredient}>
      <h2>Create</h2>
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
          addIngredient(name, description);
        }}
      >
        Add
      </Button>
    </form>
  );
};

const mapDispatch = dispatch => ({
  addIngredient: (...params) => dispatch(addIngredient(...params)),
});

export default connect(
  undefined,
  mapDispatch
)(AddIngredient);
