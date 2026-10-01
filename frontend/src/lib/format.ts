const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}

export function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(isoDate));
}
