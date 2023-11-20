import { useState } from 'react';
import Image from 'next/image';

import styles from './menu-button.module.css';

export const MenuButton = ({ isOpen, setOpen }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClickMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <button className={styles.button} onClick={handleClickMenu}>
      {isOpen ? (
        <Image
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={isHovering ? '/images/close-menu-hover.svg' : '/images/menu-close.svg'}
          width={48}
          height={48}
          alt="menu-close"
          priority
        />
      ) : (
        <Image
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={isHovering ? '/images/menu-hover.svg' : '/images/menu.svg'}
          width={48}
          height={48}
          alt="menu"
          priority
        />
      )}
    </button>
  );
};
