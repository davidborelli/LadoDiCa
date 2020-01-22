export const calculeDiscount = (price, discount, amount = 1) => {
  const priceFormated = parseFloat(price.replace(',', '.'));

  const priceWithDiscount = (
    (priceFormated - (discount / 100) * priceFormated) *
    amount
  ).toLocaleString('pt-br', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return priceWithDiscount;
};

export const strToMoney = value => {
  return parseFloat(value.replace(',', '.'));
};
