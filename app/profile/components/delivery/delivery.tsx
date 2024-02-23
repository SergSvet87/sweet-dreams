import { FC, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import style from './delivery.module.css';
import { IFormDelivery } from '@/types/interfaces/profile';
import AddressForm from '@App-Components/delivery/components/address-form';
import { mockAddress } from '@/profile/[userId]/mock-data';
import Modal from '@components/modal/modal';

interface IDelivery {}

const Delivery: FC<IDelivery> = () => {
  const [forms, setForms] = useState<IFormDelivery[]>(mockAddress);
  const [idAdress, setIdAdress] = useState<number>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const addForm = () => {
    setForms([...forms, {}]);
  };

  const removeFormModal = (index: number) => {
    setIdAdress(index);
    setIsOpenModal(true);
  };

  const removeForm = () => {
    const newForms = forms.filter((_, i) => i !== idAdress);
    setForms(newForms);
    setIsOpenModal(false);
  };

  const handleInputChange = (index: number, field: keyof IFormDelivery, value: string) => {
    const newForms = [...forms];
    newForms[index] = { ...newForms[index], [field]: value };
    setForms(newForms);
  };

  const isFormFilled = (form: IFormDelivery) => {
    return Object.values(form).some(value => value !== undefined && value !== '');
  };

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div className={forms.length ? style.deliveryContainer : style.marginBottom}>
      <h2 className={style.title}>Delivery addresses</h2>

      {forms.map((form, index) => (
        <AddressForm
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
        Add address
      </Button>

      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        closeIconPath="/images/close-modal-cross.svg"
        borderRadius="45px"
        width="282px"
      >
        <div className={style.modalContainer}>
          <p className={style.deleteTitle}>Delete delivery adress?</p>
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
export default Delivery;
