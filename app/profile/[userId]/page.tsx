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
import { useMediaQuery } from '@hooks/useMediaQuery';
import useUsersStore from '@/store/users/index';

export default function Profile() {
  const isMobile1440 = useMediaQuery(1440);
  const isMobile744 = useMediaQuery(744);
  const [activeTab, setActiveTab] = useState<string>('account');

  console.log('isMobile1440', isMobile1440);
  console.log('isMobile744', isMobile744);

  const handleTabClick = (page: string) => {
    setActiveTab(page);
  };
  // console.log('useUsersStore', useUsersStore.getState().getUsers());
  Same();
  return (
    <>
      <Search />

      <section className={styles.profile}>
        <div className={classNames('profile__container', styles.profile__wrapper)}>
          {!isMobile1440 && <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />}
          {activeTab === 'account' && <AccountDetails />}
          {activeTab === 'order' && <OrderHistory />}
          {activeTab === 'favorites' && <Favorites />}
          {activeTab === 'delivery' && <Delivery />}
          {activeTab === 'payment' && <Payment />}
        </div>
      </section>
    </>
  );
}
