import React from 'react'

import Logo from '../logo/Logo';
import Contacts from '../contacts/Contacts';


import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo/>
        <Contacts/>
      </div>
    </footer>
  )
}
