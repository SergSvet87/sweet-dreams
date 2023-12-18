import React from 'react';

import styles from './like.module.css'

export default function Like() {
  return (
    <section className={styles.like}>
      <div className="like__container">
        <h2 className={styles.like__title}>You may also like</h2>
      </div>
    </section>
  );
}
