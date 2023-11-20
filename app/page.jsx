'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { instance } from '@/utils/client';

export default function Home() {
  const router = useRouter();

  // const getUsers = async() => await instance.get('User').then(data => console.log(data));
  // console.log('getUsers: ', getUsers());

  useEffect(() => {
    const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
    const user = getCurrentUser();

    if (user) {
      router.push('/userboard');
    } else {
      router.push('/');
    }
  }, []);

  return (
    <section className="home">
      <div className="home__container">Home</div>
    </section>
  );
}
