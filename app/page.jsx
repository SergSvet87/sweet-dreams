'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import useSWR from 'swr';

// import useUsersStore from '@/store/users/index';
// import { fetcher, getUsers } from '@/utils/client';
import Hero from '@/components/hero/Hero';
import Products from '@/components/products/Products';
import Selling from '@/components/selling/Selling';

export default function Home() {
  // const router = useRouter();
  // const { users } = useUsersStore((state) => state.users);
  // const { getUsers } = useUsersStore((state) => state.getUsers);

  // const data = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}User`, fetcher);
  // const users = getUsers();
  // console.log('getUsers: ', users);

  // useEffect(() => {
  //   const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
  //   const user = getCurrentUser();

  //   if (user) {
  //     router.push('/userboard');
  //   } else {
  //     router.push('/');
  //   }
  // }, []);

  return (
    <>
      <Hero />
      <Products />
      <Selling />
    </>
  );
}
