'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// import { instance } from '@/utils/client';

export default function Home() {
  const router = useRouter();

  // const data = await instance.get('User');

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
      <div className="home__container">Hello World!</div>
    </section>
  );
}
