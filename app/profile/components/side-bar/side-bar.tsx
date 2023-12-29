// Sidebar.tsx
import React from 'react';
import Image from 'next/image';
import styles from './side-bar.module.css';
import { PROFILE } from '../../[userId]/helpers';
import { ISidebar, IProfileItem } from '@/types/interfaces/profile';

const Sidebar: React.FC<ISidebar> = ({ activeTab, onTabClick }) => {
  return (
    <aside className={styles.profile__sidebar}>
      <div className={styles.profile__name}>
        <span>First Name</span>
        <span>Last Name</span>
      </div>
      <div className={styles.profile__email}>useremail@gmail.com</div>
      <ul className={styles.profile__list}>
        {PROFILE.map((item: IProfileItem) => (
          <li
            className={activeTab === item.page ? styles.profile_active : styles.profile__item}
            key={item.id}
            onClick={() => onTabClick(item.page)}
          >
            <Image
              className={styles.icon}
              priority
              src={item.icon}
              width={40}
              height={40}
              alt={item.name}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
