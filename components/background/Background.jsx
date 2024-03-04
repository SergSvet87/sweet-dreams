import Image from 'next/image';
import classNames from 'classnames';

import styles from './background.module.css';

export default function Background() {
  return (
    <>
      <div className={styles.background_top}></div>
      <div className={styles.background_bottom}></div>
      <div className={classNames(styles.background__image, styles.background__image_1)}>
        <Image src="/images/background/bird.png" width={367} height={369} alt="" />
      </div>
      <div className={classNames(styles.background__image, styles.background__image_2)}>
        <Image src="/images/background/angel_candy.png" width={99} height={112} alt="" />
      </div>
      <div className={classNames(styles.background__image, styles.background__image_3)}>
        <Image src="/images/background/angel_frame.png" width={234} height={237} alt="" />
      </div>
      <div className={classNames(styles.background__image, styles.background__image_4)}>
        <Image src="/images/background/candy.png" width={218} height={203} alt="" />
      </div>
    </>
  );
}
