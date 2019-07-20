import React from 'react';
import styles from './index.module.css';

export const Field = ({ name, value }) => (
  <div className={styles.field}>
    <label>{name}</label>
    <span>{value}</span>
  </div>
);

export default Field;
