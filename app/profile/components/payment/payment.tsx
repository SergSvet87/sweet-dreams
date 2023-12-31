import { FC, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import style from './payment.module.css';
import { PaymentForm } from './components/payment-form';
import { mockPayment } from '@/profile/[userId]/mock-data';

interface IPayment {}
export interface IFormPayment {
  cardNumber?: string;
  mmYY?: string;
  securityCode?: string;
  cardName?: string;
}

const Payment: FC<IPayment> = () => {
  const [forms, setForms] = useState<IFormPayment[]>(mockPayment);

  const addForm = () => {
    setForms([...forms, {}]);
  };

  const removeForm = (index: number) => {
    const newForms = forms.filter((_, i) => i !== index);
    setForms(newForms);
  };

  const handleInputChange = (index: number, field: keyof IFormPayment, value: string) => {
    const newForms = [...forms];
    newForms[index] = { ...newForms[index], [field]: value };
    setForms(newForms);
  };

  const isFormFilled = (form: IFormPayment) => {
    return Object.values(form).some(value => value !== undefined && value !== '');
  };

  return (
    <div className={style.paymentContainer}>
      {forms.map((form, index) => (
        <PaymentForm
          key={index}
          form={form}
          index={index}
          handleInputChange={handleInputChange}
          removeForm={removeForm}
          isFormFilled={isFormFilled}
        />
      ))}

      <Button onClick={addForm} margin="56px 0px 0px 0px">
        <Image
          className={style.img}
          width={24}
          height={24}
          src={'/images/profile/plus.svg'}
          alt={'Plus'}
          priority
        />
        Add method
      </Button>
    </div>
  );
};
export default Payment;
