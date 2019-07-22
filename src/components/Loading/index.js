import React from 'react';
import styles from './index.module.css';

export const Loading = ({ show }) => {
  if (!show) return null;
  return (
    <p className={styles.loading}>
      <span> o </span>
      <span> o </span>
      <span> o </span>
      <span> o </span>
      <span> o </span>
      <span> o </span>
      <span> o </span>
    </p>
  );
};

export default Loading;
