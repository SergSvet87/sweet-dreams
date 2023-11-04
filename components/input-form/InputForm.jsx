import styles from './input-form.module.css';

export default function InputForm({ type, text, placeholder, name }) {
  return (
    <label className={styles.form__label}>
      <span className={styles.form__label__text}>{text}</span>
      <input
        className={styles.form__label__input}
        type={type}
        placeholder={placeholder}
        name={name}
        // required
      />
    </label>
  );
}
