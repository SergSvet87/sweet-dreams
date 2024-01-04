export interface Values {
  email?: string;
  name?: string;
  lastName?: string;
  country?: string;
  region?: string;
  zip?: string;
  city?: string;
  street?: string;
  building?: string;
  unit?: string;
  phone?: string;
  card?: string;
  date?: string;
  security?: string;
  cardName: string;
  isSaveInformation?: boolean;
  isSaveAddress?: boolean;
  isSavePayment?: boolean;
}

export const initialValues: Values = {
  email: '',
  name: '',
  lastName: '',
  country: '',
  region: '',
  zip: '',
  city: '',
  street: '',
  building: '',
  unit: '',
  phone: '',
  card: '',
  date: '',
  security: '',
  cardName: '',
  isSaveInformation: false,
  isSaveAddress: false,
  isSavePayment: false,
};
