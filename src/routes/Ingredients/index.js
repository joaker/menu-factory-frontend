import React, { useContext } from 'react';
import connect from 'hoc/connect';
import { Context } from 'context';
import AddIngredient from './AddIngredient';
import Ingredient from './Ingredient';
import styles from './index.module.css';

export const Ingredients = ({ ingredients }) => {
  const items = ingredients.map(i => (
    <li>
      <Ingredient key={i.id} {...i} />
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

const mapState = ({ entities: { ingredients } }) => ({
  ingredients,
});

export default connect(mapState)(Ingredients);
