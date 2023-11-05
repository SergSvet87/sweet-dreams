// import { instance } from '@/utils/client';

export default async function Home() {
  // async function getData() {
  //   const res = await instance;
   
  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }
   
  //   return res.json()
  // }

  // const data = await getData()
  // console.log('data: ', data);
  return <section className="home">Hello World!</section>;
}
