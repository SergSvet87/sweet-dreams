'use client';
import { useEffect, useState } from 'react';
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
import useModalStore from '@hooks/useModalStore';
import Modal from '@components/modal/modal';

export default function Profile() {
  const { isOpen, openModal, closeModal, page, setPage } = useModalStore();
  const isMobile1440 = useMediaQuery(1440);
  const isMobile744 = useMediaQuery(744);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<string>('account');

  useEffect(() => {
    setPage('profile');
    isMobile1440 ? setIsMobile(true) : setIsMobile(false);
    return () => setPage('');
  }, [setPage, isMobile1440]);

  console.log('isMobile', isMobile);

  const handleTabClick = (page: string) => {
    setActiveTab(page);
    closeModal();
  };

  return (
    <>
      <Search />

      <section className={styles.profile}>
        <div className={classNames('profile__container', styles.profile__wrapper)}>
          {isMobile === false && <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />}
          {activeTab === 'account' && <AccountDetails />}
          {activeTab === 'order' && <OrderHistory />}
          {activeTab === 'favorites' && <Favorites />}
          {activeTab === 'delivery' && <Delivery />}
          {activeTab === 'payment' && <Payment />}
          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            justifyContent="flex-start"
            padding="122px 0px"
            alightItems="flex-start"
            width="321px"
          >
            <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />
          </Modal>
        </div>
      </section>
    </>
  );
}
