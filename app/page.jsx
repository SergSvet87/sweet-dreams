import { instance } from '@/utils/client';
import styles from "./page.module.css";

export default async function Home() {
  // const data = await instance.get('User')
  // console.log('data: ', data);
  return (
    <section className={styles.home}>

      <img
        src="images/Hero_Image.svg"
        alt="Basket Icon"
        className={styles.home_image}
      />
      <div className={styles.home_container}>
        <h1>rainbow</h1>
        <h1>heart pops</h1>
        <button className={styles.container_button}>shop now</button>
      </div>

    </section>
  );
}
