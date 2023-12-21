import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 70px;
  /* padding-left: 162px;
  padding-right: 162px; */
  /* flex-direction: column; */
  width: 786px;
`;

export const HeaderContact = styled.h2`
  margin-bottom: 44px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

export const HeaderDelivery = styled.h2`
  margin-top: 32px;
  margin-bottom: 24px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

export const FieldsContainer = styled.div``;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: end;
  margin-bottom: 40px;
`;

export const HeaderPayment = styled.h2`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

export const LabelCheckbox = styled.label`
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  gap: 16px;
  margin-bottom: 18px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SaveCheckbox = styled.label`
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  gap: 16px;
  margin-top: 44px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PaymentCheckbox = styled.label`
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  gap: 16px;
  margin-bottom: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #575757;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FlexInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Input = styled.input`
  width: 462px;
  border-radius: 8px;
  height: 32px;

  padding-left: 8px;
  padding-right: 8px;

  border: 1px solid #575757;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SmallInput = styled.input`
  width: 138px;
  border-radius: 8px;
  height: 32px;

  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid #575757;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BiggerInput = styled.input`
  width: 300px;
  border-radius: 8px;
  height: 32px;

  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid #575757;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputContainer = styled.div`
  width: 462px;
  display: flex;
  justify-content: space-between;
`;

export const Subtotal = styled.p`
  font-family: PoppinsS;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PayButton = styled.button`
  margin-top: 20px;
  width: 180px;
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;

  background-color: #d4d4d4;
  border-radius: 50px;

  font-family: PoppinsS;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 40px;
  color: #131313;
`;

export const Price = styled.div`
  font-family: PoppinsS;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #131313;
`;
