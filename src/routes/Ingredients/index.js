import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getIngredients from 'effects/ingredients/get';
import AddIngredient from './AddIngredient';
import Ingredient from './Ingredient';
import styles from './index.module.css';

export const selectIngredients = ({ entities: { ingredients } }) => ingredients;

export const Ingredients = () => {
  const dispatch = useDispatch();
  useEffect(getIngredients(dispatch), []);

  const ingredients = useSelector(selectIngredients);
  const items = ingredients.map(i => (
    <li key={i.id}>
      <Ingredient {...i} />
    </li>
  ));
  return (
    <div className={styles.ingredients}>
      <h1>Ingredients</h1>
      <AddIngredient />
      <ul>{items}</ul>
    </div>
  );
};

export default Ingredients;
