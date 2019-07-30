import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import create from 'effects/ingredients/create';
import createHandleChange from 'lib/createHandleChange';
import Loading from 'components/Loading';
import styles from './index.module.css';

const initialValues = {
  name: '',
  description: '',
};

export const AddIngredient = () => {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
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
          create(dispatch, { name, description }, setLoading);
        }}
      >
        Add
      </Button>
      <Loading show={loading} />
    </form>
  );
};

export default AddIngredient;
