import { FC } from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import style from './payment-form.module.css';
import { IFormPayment } from '@App-Components/payment/payment';

interface IPaymentForm {
  form: IFormPayment;
  index: number;
  handleInputChange: (index: number, field: keyof IFormPayment, value: string) => void;
  removeForm: (index: number) => void;
  isFormFilled: (form: IFormPayment) => boolean;
}

export const PaymentForm: FC<IPaymentForm> = ({
  form,
  index,
  handleInputChange,
  removeForm,
  isFormFilled,
}) => {
  return (
    <div className={style.formContainer}>
      <div className={style.header}>
        <h2 className={style.title}>Payment method</h2>
        <Button onClick={() => removeForm(index)} margin="0" padding="0" border="none">
          <Image
            className={style.img}
            width={24}
            height={24}
            src={'/images/profile/close.svg'}
            alt={'Close'}
            priority
          />
        </Button>
      </div>
      <div className={style.typeCardImg}>
        <Image
          className={style.img}
          width={24}
          height={24}
          src={'/images/profile/close.svg'}
          alt={'Close'}
          priority
        />
      </div>
      <form className={style.form}>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className={style.input}
          onChange={e => handleInputChange(index, 'cardNumber', e.target.value)}
          placeholder="Card number"
          defaultValue={form.cardNumber}
        />
        <div className={style.inputContainer}>
          <input
            type="text"
            id="mmYY"
            name="mmYY"
            className={style.input}
            onChange={e => handleInputChange(index, 'mmYY', e.target.value)}
            placeholder="MM/YY"
            defaultValue={form.mmYY}
          />
          <input
            type="text"
            id="securityCode"
            name="securityCode"
            className={style.input}
            onChange={e => handleInputChange(index, 'securityCode', e.target.value)}
            placeholder="Security code"
            defaultValue={form.securityCode}
          />
        </div>
        <input
          type="text"
          id="cardName"
          name="cardName"
          className={style.input}
          onChange={e => handleInputChange(index, 'cardName', e.target.value)}
          placeholder="Name on the card"
          defaultValue={form.cardName}
        />
        {isFormFilled(form) && (
          <Button type="submit" margin="16px 0px 0px 0px" background="var(--accent)">
            Edit
          </Button>
        )}
      </form>
    </div>
  );
};
