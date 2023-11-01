'use client';

import styles from './profile.module.css';

export default function Profile() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className={styles.profile} >
      <button onClick={handleClick}>Profile</button>
    </div>
  );
}
