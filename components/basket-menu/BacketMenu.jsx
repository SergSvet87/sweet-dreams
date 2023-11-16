import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './backet-menu.module.css';
import BasketItem from '../cart-container/BasketItem';
import { useSelector } from 'react-redux';

export default function BacketMenu({ isOpen, setOpen, basketRef }) {
    const basketItems = [
        {
            id: 1,
            img: '../../public/images/logo.svg',
            title: 'Chocolat',
            price: '100',
            amount: 1
        },
        {
            id: 2,
            img: '../../public/images/logo.svg',
            title: 'Candy',
            price: '100',
            amount: 1
        },
        {
            id: 3,
            img: '../../public/images/logo.svg',
            title: 'Cake',
            price: '100',
            amount: 1
        },
        {
            id: 4,
            img: '../../public/images/logo.svg',
            title: 'Puncake',
            price: '100',
            amount: 1
        },
        {
            id: 5,
            img: '../../public/images/logo.svg',
            title: 'Wonka',
            price: '100',
            amount: 1
        },
    ];
    // const { orderGoods, totalPrice, totalCount } = useSelector((state) => state.order);
    

    // const [basketItems, setItem] = useState([]);
    const handleClick = () => {
        setOpen(false);
    };


    return (
        <nav className={cn(styles.bakset__menu, isOpen ? styles.active : '')} ref={basketRef}>
            <h2>Кошик</h2>
            <ul className={styles.basket__list}>
                {basketItems.map((item) => (
                    <BasketItem key={item.id} item={item} />
                ))}
            </ul>
            <button className={styles.bakset__menu__button}>
                <Link href="/basket" onClick={handleClick}>
                    <div>Оформити Замовлення</div>
                </Link>
            </button>
        </nav>
    );
}