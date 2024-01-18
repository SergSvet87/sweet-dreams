'use client';

import { useState } from 'react';

import styles from './modal-checkout.module.css';

const ModalOrderCheckout = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    modalIsOpen && (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.container_button}>
            <button className={styles.button} type="button">
              x
            </button>
          </div>

          {children}
        </div>
      </div>
    )
  );
};

export default ModalOrderCheckout;
