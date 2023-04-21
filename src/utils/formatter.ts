const dateFormatter = new Intl.DateTimeFormat('pt-BR');

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export { dateFormatter, priceFormatter };
