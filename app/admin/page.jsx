import { redirect } from 'next/navigation';
import classNames from 'classnames';

import styles from './admin.module.css';

export default function AdminPage() {
  const auth = false;

  return auth ? (
    <section className={styles.admin}>
      <div className={classNames('admin__container', styles.admin__wrapper)}>Admin</div>
    </section>
  ) : (
    redirect('/auth/admin')
  );
}
