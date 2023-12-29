import { FC } from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import style from './address-form.module.css';
import { IFormDelivery } from '@/types/interfaces/profile';

interface IAddressForm {
  form: IFormDelivery;
  index: number;
  handleInputChange: (index: number, field: keyof IFormDelivery, value: string) => void;
  removeForm: (index: number) => void;
  isFormFilled: (form: IFormDelivery) => boolean;
}

const AddressForm: FC<IAddressForm> = ({
  form,
  index,
  handleInputChange,
  removeForm,
  isFormFilled,
}) => {
  return (
    <div className={style.formContainer}>
      <div className={style.header}>
        <h2>Address {index + 1}</h2>
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

      <form className={style.form}>
        <input
          type="text"
          id="country"
          name="country"
          className={style.input}
          onChange={e => handleInputChange(index, 'country', e.target.value)}
          placeholder="Country"
          defaultValue={form.country}
        />
        <div className={style.inputContainer}>
          <input
            type="text"
            id="region"
            name="region"
            className={style.input}
            onChange={e => handleInputChange(index, 'region', e.target.value)}
            placeholder="Region"
            defaultValue={form.region}
          />
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className={style.input}
            onChange={e => handleInputChange(index, 'zipCode', e.target.value)}
            placeholder="ZIP code"
            defaultValue={form.zipCode}
          />
        </div>
        <input
          type="text"
          id="city"
          name="city"
          className={style.input}
          onChange={e => handleInputChange(index, 'city', e.target.value)}
          placeholder="City"
          defaultValue={form.city}
        />
        <div className={style.inputContainer}>
          <input
            type="text"
            id="building"
            name="building"
            className={style.input}
            placeholder="Building"
            onChange={e => handleInputChange(index, 'building', e.target.value)}
            defaultValue={form.building}
          />
          <input
            type="text"
            id="unit"
            name="unit"
            className={style.input}
            placeholder="Unit"
            onChange={e => handleInputChange(index, 'unit', e.target.value)}
            defaultValue={form.unit}
          />
        </div>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className={style.input}
          placeholder="Phone number"
          onChange={e => handleInputChange(index, 'phoneNumber', e.target.value)}
          defaultValue={form.phoneNumber}
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
export default AddressForm;
