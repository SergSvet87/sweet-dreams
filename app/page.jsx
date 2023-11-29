'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useUsersStore from '@/store/users/index';
import { instance } from '@/utils/client';
import Hero from '@/components/hero/Hero';
import Products from '@/components/products/Products';
import Selling from '@/components/selling/Selling';

export default function Home() {
  const router = useRouter();
  const {users} = useUsersStore((state) => state.getUsers);
  const {getUsers} = useUsersStore(({users}) => users);
  console.log('users: ', users);

  // const getUsers = async() => await instance.get('User').then(data => console.log(data));
  // console.log('getUsers: ', getUsers());

  useEffect(() => {
    const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
    const user = getCurrentUser();
    console.log('user: ', user);

    if (user) {
      router.push('/userboard');
    } else {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Hero />
      <Products />
      <Selling />
    </>
  );
}
