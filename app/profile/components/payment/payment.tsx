import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import style from './payment.module.css';
import { PaymentForm } from '@App-Components/payment/components/payment-form';
import { mockPayment } from '@/profile/[userId]/mock-data';
import Modal from '@components/modal/modal';

interface IPayment {}
export interface IFormPayment {
  cardNumber?: string;
  mmYY?: string;
  securityCode?: string;
  cardName?: string;
}

const Payment: FC<IPayment> = () => {
  const [forms, setForms] = useState<IFormPayment[]>(mockPayment);
  const [idPayment, setIdPayment] = useState<number>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const addForm = () => {
    setForms([...forms, {}]);
  };

  const removeFormModal = (index: number) => {
    setIdPayment(index);
    setIsOpenModal(true);
  };

  const removeForm = () => {
    const newForms = forms.filter((_, i) => i !== idPayment);
    setForms(newForms);
    setIsOpenModal(false);
  };

  const handleInputChange = (index: number, field: keyof IFormPayment, value: string) => {
    const newForms = [...forms];
    newForms[index] = { ...newForms[index], [field]: value };
    setForms(newForms);
  };

  const isFormFilled = (form: IFormPayment) => {
    return Object.values(form).some(value => value !== undefined && value !== '');
  };

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div className={style.paymentContainer}>
      {forms.map((form, index) => (
        <PaymentForm
          key={index}
          form={form}
          index={index}
          handleInputChange={handleInputChange}
          removeForm={removeFormModal}
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

      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        closeIconPath="/images/close-modal-cross.svg"
        borderRadius="45px"
        width="282px"
      >
        <div className={style.modalContainer}>
          <p className={style.deleteTitle}>Delete payment method?</p>
          <Button
            onClick={removeForm}
            margin="12px 0px 0px 0px"
            border="none"
            background="var(--accent)"
            color="var(--white)"
          >
            delete
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default Payment;
