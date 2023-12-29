'use client';
import { useState } from 'react';
import classNames from 'classnames';
import Search from '@/components/search/Search.jsx';
import styles from './profile.module.css';
import AccountDetails from '@App-Components/account/account-details';
import Sidebar from '@/app/profile/components/side-bar/side-bar';
import { OrderHistory } from '@/app/profile/components/order/order-history';
import Delivery from '@/app/profile/components/delivery/delivery';
import Favorites from '@/app/profile/components/favorites/favorites';
import Payment from '@App-Components/payment/payment';

export default function Profile() {
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
            {activeTab === 'favorites' && <Favorites />}
            {activeTab === 'delivery' && <Delivery />}
            {activeTab === 'payment' && <Payment />}
          </div>
        </div>
      </section>
    </>
  );
}
