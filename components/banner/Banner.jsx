import classNames from 'classnames';

import styles from './banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={classNames('banner__container', styles.banner__wrapper)}>
        <h2 className={styles.banner__title}>
          <span className={classNames(styles.title__arrows, 'arrows')} />
          <span className={styles.title__text}>Jelly Beans sale</span>
        </h2>
      </div>
    </div>
  );
}
