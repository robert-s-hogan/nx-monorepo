//libs/utils/src/lib/format-utils.ts
export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

// function formatDate(
//   date: Date | string,
//   format: string = 'YYYY-MM-DD'
// ): string {
//   const dateObj = typeof date === 'string' ? new Date(date) : date;
//   const year = dateObj.getFullYear();
//   const month = String(dateObj.getMonth() + 1).padStart(2, '0');
//   const day = String(dateObj.getDate()).padStart(2, '0');

//   return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
// }
