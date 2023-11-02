import styles from './theme.module.css';

export default function ThemeToggle({ value, onChange }) {
  return (
    <div className={styles.changeTopic}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles.checkbox__input}
          onChange={onChange}
          checked={value}
        />
        <div className={styles.checkbox__div}></div>
      </label>
    </div>
  );
}
