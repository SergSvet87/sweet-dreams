import classNames from 'classnames';

import styles from './admin.module.css';

export default function AdminPage() {
  return (
    <section className={styles.admin}>
      <div className={classNames('admin__container', styles.admin__wrapper)}>Admin</div>
    </section>
  );
}
