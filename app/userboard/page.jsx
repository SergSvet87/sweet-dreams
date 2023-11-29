import { instance } from '@/utils/client';

export default async function UserBoard() {
  const data = await instance.get('User');
  // console.log('data: ', data);
  return (
    <section className="userboard">
      <div className="userboard__container">Hello User!</div>
    </section>
  );
}
