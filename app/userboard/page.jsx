'use client';

// import { instance } from '@/utils/client';

// import { handler } from '@app/api/auth/[...nextauth]/route';
// import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

export default function UserBoard() {
  const { data: session } = useSession();
  console.log('session', session);
  // const data = await instance.get('User');
  // console.log('data: ', data);
  return (
    <section className="userboard">
      <div className="userboard__container">Hello, {session.user.name}</div>
    </section>
  );
}
