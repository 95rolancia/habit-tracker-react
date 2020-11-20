import React, { useState } from "react";
import styles from "./habit.module.css";

const Habit = (props) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      return;
    }
  };

  const handleDelete = () => {};

  return (
    <li className={styles.habit}>
      <span className={styles.habit__name}>Running</span>
      <span className={styles.habit__count}>{count}</span>
      <button className={styles.habit__button} onClick={handleIncrement}>
        <i className="fas fa-plus"></i>
      </button>
      <button className={styles.habit__button} onClick={handleDecrement}>
        <i className="fas fa-minus"></i>
      </button>
      <button className={styles.habit__button} onCLick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
