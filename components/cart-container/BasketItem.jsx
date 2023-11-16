import styles from "./basket-Item.module.css"

export default function BasketItem(props) {
    const { id, img, title, price, amount } = props.item;

    return (
        <li className={styles.basket__item} key={id}>
            <div>{id}</div>
            <div>{title}</div>
            <button className={styles.button_delete}>-</button>
            <div>{amount}</div>
            <button className={styles.button_add}>+</button>
            <div>{price}</div>
            <img src="images/delete.svg"
                alt="Delete icon"
                className={styles.item__logo}
            />
        </li>
    );
}