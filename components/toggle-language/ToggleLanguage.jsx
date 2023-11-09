import styles from './toggle-language.module.css';

export default function ToggleLanguage({ value, onChange }) {
  return (
    <div className={styles.changeLanguage}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles.checkbox__input}
          onChange={onChange}
          checked={value}
        />
        <div className={styles.checkbox__div}>
          <span>EN</span>
          <span>UA</span>
        </div>
      </label>
    </div>
  );
}
