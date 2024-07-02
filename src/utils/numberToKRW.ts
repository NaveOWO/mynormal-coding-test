export const numberToKRW = (target: number | string) => {
  const targetNum = Number(target);

  const formatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0,
  });

  const formattedValue = formatter.format(targetNum).replace(/\₩/g, '').trim();

  return `${formattedValue}원`;
};
