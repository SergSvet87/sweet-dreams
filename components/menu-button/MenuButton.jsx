import Image from 'next/image';

import styles from './menu-button.module.css';

export const MenuButton = ({ isOpen, setOpen }) => {
  const handleClickMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <button className={styles.button} onClick={handleClickMenu}>
      {isOpen ? (
        <Image src="/menu-close.svg" width={48} height={48} alt="menu" priority />
      ) : (
        <Image src="/menu.svg" width={48} height={48} alt="menu-close" priority />
      )}
    </button>
  );
};
