import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMenus from 'effects/menus/get';
import AddMenu from './AddMenu';
import Menu from './Menu';
import styles from './index.module.css';

export const selectMenus = ({ entities: { menus } }) => menus;

export const MenuList = () => {
  const dispatch = useDispatch();
  useEffect(getMenus(dispatch), []);

  const menus = useSelector(selectMenus);
  const items = menus.map(i => (
    <li key={i.id}>
      <Menu {...i} />
    </li>
  ));
  return (
    <div className={styles.menus}>
      <h1>Menus</h1>
      <AddMenu />
      <ul>{items}</ul>
    </div>
  );
};

export default MenuList;
