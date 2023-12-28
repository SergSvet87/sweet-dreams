export const calcTotal = (orderGoods) =>
  orderGoods.reduce(
    ([totalCount, totalPrice, subTotal], item) => {
      const sumCount = totalCount + item.count;
      const sumPrice = totalPrice + item.price * item.count;
      const sumTotal = subTotal + sumPrice;

      return [sumCount, sumPrice, sumTotal];
    },
    [0, 0, 0]
  );
  