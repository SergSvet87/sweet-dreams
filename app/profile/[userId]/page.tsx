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
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { isOpen, openModal, closeModal, page, setPage } = useModalStore();
  const isMobile1440 = useMediaQuery(1440);
  const isMobile744 = useMediaQuery(744);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isMobileMin, setIsMobileMin] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('account');

  const router = useRouter();

  useEffect(() => {
    setPage('profile');
    isMobile1440 ? setIsMobile(true) : setIsMobile(false);
    isMobile744 ? setIsMobileMin(true) : setIsMobileMin(false);
    return () => setPage('');
  }, [setPage, isMobile1440, isMobile744]);

  // useEffect(() => {
  //   isMobile744 ? setIsMobileMin(true) : setIsMobileMin(false);
  // }, [isMobile744]);

  const handleTabClick = (page: string) => {
    page === 'logout' && router.push('/auth/login');
    setActiveTab(page);
    closeModal();
  };
  console.log('profile', isMobileMin);

  return (
    <>
      <Search />

      <section className={styles.profile}>
        <div className={classNames('profile__container', styles.profile__wrapper)}>
          {isMobile === false && <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />}
          {activeTab === 'account' && <AccountDetails />}
          {activeTab === 'order' && <OrderHistory isMobile744={isMobileMin} />}
          {activeTab === 'favorites' && <Favorites />}
          {activeTab === 'delivery' && <Delivery />}
          {activeTab === 'payment' && <Payment />}
          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            justifyContent={isMobile744 ? 'center' : 'flex-start'}
            padding="122px 0px"
            alightItems="flex-start"
            width="321px"
            borderRadius="35px"
          >
            <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />
          </Modal>
        </div>
      </section>
    </>
  );
}
