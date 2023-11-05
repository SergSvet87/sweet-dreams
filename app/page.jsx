import { instance } from '@/utils/client';

export default async function Home() {
  const data = await instance.get('User')
  // console.log('data: ', data);
  return <section className="home">Hello World!</section>;
}
