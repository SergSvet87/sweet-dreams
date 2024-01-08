import React from 'react';
import styles from './account-details.module.css';

const AccountDetails = () => {
  return (
    <div className={styles.accountDetails}>
      <h2 className={styles.title}>ACCOUNT DETAILS</h2>
      <form className={styles.form}>
        <label htmlFor="firstName" className={styles.label}>
          First name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className={styles.input}
          placeholder="First name"
        />

        <label htmlFor="lastName" className={styles.label}>
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className={styles.input}
          placeholder="Last name"
        />

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="youremail@gmail.com"
          defaultValue=""
        />
        <button type="submit" className={styles.editButton}>
          Edit
        </button>
        <button type="button" className={styles.deleteButton}>
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default AccountDetails;
