import { FC } from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import style from './delivery.module.css';

interface IDelivery {}

const Delivery: FC<IDelivery> = () => {
  return (
    <div className={style.deliveryContainer}>
      <h2 className={style.title}>Delivery addresses</h2>

      <div className={style.header}>
        <h2>Address</h2>
        <Button margin="0" padding="0" border="none">
          <Image
            className={style.img}
            width={24}
            height={24}
            src={'/images/profile/close.svg'}
            alt={'Plus'}
            priority
          />
        </Button>
      </div>

      <form className={style.form}>
        <input
          type="text"
          id="country"
          name="country"
          className={style.input}
          placeholder="Country"
        />
        <div className={style.inputContainer}>
          <input
            type="text"
            id="region"
            name="region"
            className={style.input}
            placeholder="Region"
          />
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className={style.input}
            placeholder="ZIP code"
          />
        </div>
        <input type="text" id="city" name="city" className={style.input} placeholder="City" />
        <div className={style.inputContainer}>
          <input
            type="text"
            id="building"
            name="building"
            className={style.input}
            placeholder="Building"
          />
          <input type="text" id="unit" name="unit" className={style.input} placeholder="Unit" />
        </div>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className={style.input}
          placeholder="Phone number"
          defaultValue=""
        />
        <Button
          type={'submit'}
          margin="16px 0px 0px 0px"
          children={'Edit'}
          background={'var(--accent)'}
        />
      </form>

      <Button margin="56px 0px 0px 0px">
        <Image
          className={style.img}
          width={24}
          height={24}
          src={'/images/profile/plus.svg'}
          alt={'Plus'}
          priority
        />
        Add address
      </Button>
    </div>
  );
};
export default Delivery;
