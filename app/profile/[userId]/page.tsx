'use client';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import Search from '@/components/search/Search.jsx';
import styles from './profile.module.css';
import Sidebar from '@/app/profile/components/side-bar/side-bar';
import AccountDetails from '../components/account/account-details';
import { OrderHistory } from '../components/order/order-history';

export default function Profile() {
  const query = useParams();
  const [activeTab, setActiveTab] = useState<string>('account');

  const handleTabClick = (page: string) => {
    setActiveTab(page);
  };

  return (
    <>
      <Search />

      <section className={styles.profile}>
        <div className={classNames('profile__container', styles.profile__wrapper)}>
          <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />

          <div className={styles.profile__content}>
            {activeTab === 'account' && <AccountDetails />}
            {activeTab === 'order' && <OrderHistory />}
            {activeTab === 'favorites' && (
              <div className={styles.profile_title}>Favorites List</div>
            )}
            {activeTab === 'delivery' && (
              <div className={styles.profile_title}>Delivery Addresses</div>
            )}
            {activeTab === 'payment' && <div className={styles.profile_title}>Payment Methods</div>}
          </div>
        </div>
      </section>
    </>
  );
}
