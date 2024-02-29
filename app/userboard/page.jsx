// import { instance } from '@/utils/client';

import { authOptions } from '@app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function UserBoard() {
  const session = await getServerSession(authOptions);
  console.log('session', session?.user);
  // const data = await instance.get('User');
  // console.log('data: ', data);
  return (
    <section className="userboard">
      <div className="userboard__container">Hello {session?.user.name}!</div>
    </section>
  );
}
