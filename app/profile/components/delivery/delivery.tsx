import { FC, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import style from './delivery.module.css';
import { IFormDelivery } from '@/types/interfaces/profile';
import AddressForm from './components/address-form';
import { mockAddress } from '@/profile/[userId]/mock-data';

interface IDelivery {}

const Delivery: FC<IDelivery> = () => {
  const [forms, setForms] = useState<IFormDelivery[]>(mockAddress);

  const addForm = () => {
    setForms([...forms, {}]);
  };

  const removeForm = (index: number) => {
    const newForms = forms.filter((_, i) => i !== index);
    setForms(newForms);
  };

  const handleInputChange = (index: number, field: keyof IFormDelivery, value: string) => {
    const newForms = [...forms];
    newForms[index] = { ...newForms[index], [field]: value };
    setForms(newForms);
  };

  const isFormFilled = (form: IFormDelivery) => {
    return Object.values(form).some(value => value !== undefined && value !== '');
  };

  return (
    <div className={style.deliveryContainer}>
      <h2 className={style.title}>Delivery addresses</h2>

      {forms.map((form, index) => (
        <AddressForm
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
        Add address
      </Button>
    </div>
  );
};
export default Delivery;
