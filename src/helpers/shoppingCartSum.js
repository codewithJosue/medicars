export const shoppingCartSum = data => {
  return data.reduce((n, {total}) => n + total, 0);
};
