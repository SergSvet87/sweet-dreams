import { RingLoader } from 'react-spinners';

import styles from './loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__wrapper}>
        <RingLoader
          color="var(--text-color)"
          // loading={loading}
          // cssOverride={}
          size={250}
          aria-label="Loading Spinner"
          data-loader="loader"
        />
      </div>
    </div>
  );
}
