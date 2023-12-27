import { FC } from 'react';
import Image from 'next/image';
import style from './products.module.css';

interface IOrderProducts {}

const OrderProducts: FC<IOrderProducts> = () => {
  return (
    <>
      <div className={style.tableHeader}>
        <p>Products</p>
        <p>Total</p>
      </div>
      <div className={style.tableContainer}>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img className={style.img} src={'/images/products/card_3.png'} alt="Product" />
            </div>
            <div className={style.descriptionContainer}>
              <p className={style.candyName}>Candy Bird</p>
              <p className={style.candyInf}>Box of 10</p>
              <p className={style.candyInf}>Item No: 112</p>
            </div>
            <div className={style.descriptionContainer}>
              <p className={(style.candyName, style.candyNameMg)}>₴270</p>
              <p className={(style.candyName, style.candyNameMg)}>x</p>
              <p className={style.candyName}>1</p>
            </div>
            <div className={style.descriptionContainer}>
              <p className={(style.candyName, style.total)}>₴270</p>
            </div>
          </div>
        </div>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img className={style.img} src={'/images/products/card_1.png'} alt="Product" />
            </div>
            <div className={style.descriptionContainer}>
              <p className={style.candyName}>Candy Bird</p>
              <p className={style.candyInf}>Box of 10</p>
              <p className={style.candyInf}>Item No: 112</p>
            </div>
            <div className={style.descriptionContainer}>
              <p className={(style.candyName, style.candyNameMg)}>₴270</p>
              <p className={(style.candyName, style.candyNameMg)}>x</p>
              <p className={style.candyName}>1</p>
            </div>
            <div className={style.descriptionContainer}>
              <p className={(style.candyName, style.total)}>₴270</p>
            </div>
          </div>
        </div>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img className={style.img} src={'/images/products/card_4.png'} alt="Product" />
            </div>
            <div className={style.descriptionContainer}>
              <p className={style.candyName}>Candy Bird</p>
              <p className={style.candyInf}>Box of 10</p>
              <p className={style.candyInf}>Item No: 112</p>
            </div>
            <div className={style.descriptionContainer}>
              <p className={(style.candyName, style.candyNameMg)}>₴270</p>
              <p className={(style.candyName, style.candyNameMg)}>x</p>
              <p className={style.candyName}>1</p>
            </div>
            <div className={style.descriptionContainer}>
              <p className={(style.candyName, style.total)}>₴270</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderProducts;
