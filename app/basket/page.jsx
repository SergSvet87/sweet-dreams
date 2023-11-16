import { instance } from '@/utils/client';
import styles from './page.module.css';


export default async function Basket() {

    return (
        <div className={styles.basket_page}>
            <h1>Оформлення замовлення</h1>
            <div>Введіть свої данні для замовлення</div>
            <div className={styles.form_container}>
                <div className={styles.input_group}>
                    <input placeholder="Ім'я" />
                    <input placeholder="Прізвище" />
                </div>
                <input placeholder="Email" />
                <input placeholder="Номер телефону" />
                <input placeholder="Місто" />
                <button>Оформити замовлення</button>
            </div>
        </div>
    );
}