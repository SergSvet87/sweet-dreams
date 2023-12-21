'use client';

// import Image from 'next/image';

// import { useMediaQuery } from '@/hooks/useMediaQuery';
// import { Count } from '../count/Count';
import {
  FlexContainer,
  FlexContainerPrice,
  HeaderGood,
  GoodDetails,
  Test,
  Good,
  Table,
  TableName,
  SinglePrice,
  Amount,
  AmountPrice,
} from './OrderGoods.styled';
// import styles from './order-goods.module.css';

export function OrderGoods() {
  // const isMobile744 = useMediaQuery(744);

  return (
    <div>
      <Table>
        <TableName>Product</TableName>
        <TableName>Total</TableName>
      </Table>
      <ul>
        <Good>
          <Test className="image"></Test>
          <FlexContainer>
            <div>
              <HeaderGood>Candy Bird</HeaderGood>
              <GoodDetails>Box of 10</GoodDetails>
              <GoodDetails>Item No: 112</GoodDetails>
            </div>
            <FlexContainerPrice>
              <SinglePrice>₴300</SinglePrice>
              <Amount>x 2</Amount>
              <AmountPrice>₴600</AmountPrice>
            </FlexContainerPrice>
          </FlexContainer>
        </Good>
        <Good>
          <Test className="image"></Test>
          <FlexContainer>
            <div>
              <HeaderGood>Candy Bird</HeaderGood>
              <GoodDetails>Box of 10</GoodDetails>
              <GoodDetails>Item No: 112</GoodDetails>
            </div>
            <FlexContainerPrice>
              <SinglePrice>₴300</SinglePrice>
              <Amount>x 2</Amount>
              <AmountPrice>₴600</AmountPrice>
            </FlexContainerPrice>
          </FlexContainer>
        </Good>
      </ul>
    </div>
  );
}
