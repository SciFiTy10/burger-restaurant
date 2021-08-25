export const createItem = (id, title, price, amount = 1) => {
  return {
    id: id,
    title: title,
    price: price,
    amount: amount,
  };
};
