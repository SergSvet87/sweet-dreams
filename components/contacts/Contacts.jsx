import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './contacts.module.css';

export default function Contacts() {
  const [isHoveringFacebook, setIsHoveringFacebook] = useState(false);
  const [isHoveringInsta, setIsHoveringInsta] = useState(false);

  const handleMouseEnterFB = () => {
    setIsHoveringFacebook(true);
  };
  const handleMouseLeaveFB = () => {
    setIsHoveringFacebook(false);
  };

  const handleMouseEnterIG = () => {
    setIsHoveringInsta(true);
  };

  const handleMouseLeaveIG = () => {
    setIsHoveringInsta(false);
  };

  return (
    <>
      <h3 className={styles.contacts__title}>Contact us</h3>
      <ul className={styles.contacts__links}>
        <li
          className={styles.contacts__item}
          onMouseEnter={handleMouseEnterFB}
          onMouseLeave={handleMouseLeaveFB}
        >
          <Link href="#">
            <Image
              width={48}
              height={48}
              src={
                isHoveringFacebook
                  ? '/images/contacts/facebook-hover.svg'
                  : '/images/contacts/facebook.svg'
              }
              alt="Facebook icon"
              priority
            />
          </Link>
        </li>
        <li
          className={styles.contacts__item}
          onMouseEnter={handleMouseEnterIG}
          onMouseLeave={handleMouseLeaveIG}
        >
          <Link href="#">
            <Image
              width={48}
              height={38}
              src={
                isHoveringInsta
                  ? '/images/contacts/instagram-hover.svg'
                  : '/images/contacts/instagram.svg'
              }
              alt="Instagram icon"
              priority
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
