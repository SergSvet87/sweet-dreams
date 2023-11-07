import React from "react";
import { useDispatch } from "react-redux";

import { addProduct, removeProduct } from "../../store/order/orderSlice.js";

import styles from "./count.module.css";

export const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id }));
  };

  const removeCount = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={styles.count}>
      <button
        className={styles.minus}
        onClick={removeCount}
        // disabled={count === 1}
      >
        -
      </button>
      <p className={styles.amount}>{count}</p>
      <button
        className={styles.plus}
        onClick={addCount}
      >
        +
      </button>
    </div>
  );
};
