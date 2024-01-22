'use client';

import Image from 'next/image';
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
              <Image src="/images/order/close.svg" alt="true" width={32} height={32} />
            </button>
          </div>

          {children}
        </div>
      </div>
    )
  );
};

export default ModalOrderCheckout;
