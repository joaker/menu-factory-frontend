import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import create from 'effects/menus/create';
import createHandleChange from 'lib/createHandleChange';
import withLoading from 'lib/withLoading';
import Loading from 'components/Loading';
import Recipe from './Recipe';
import styles from './index.module.css';

const initialValues = {
  name: '',
  description: '',
};

export const CreateMenu = () => {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleChange = createHandleChange(values, setValues);
  const { name, recipes = [], description } = values;
  const recipeList = recipes.map(recipe => <Recipe {...recipe} />);
  return (
    <form className={styles.menu}>
      <TextField label="name" value={name} onChange={handleChange('name')} />
      {recipeList}
      <TextField
        label="description"
        value={description}
        onChange={handleChange('description')}
      />
      <Button
        color="primary"
        disabled={!name}
        onClick={() => {
          setValues(initialValues);
          create(dispatch, { name, recipes, description }, setLoading);
        }}
      >
        Add
      </Button>
      <Loading show={loading} />
    </form>
  );
};

export default CreateMenu;
