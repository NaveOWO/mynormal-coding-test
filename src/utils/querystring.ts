import QueryString from 'qs';
import { z } from 'zod';

export const getStringQS = (target: string) => {
  const qs = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const value = qs[target];
  const result = z.string().safeParse(value);

  if (result.success) {
    return result.data;
  } else {
    throw new Error(`쿼리스트링을 {string}={string}의 형태로 설정해주세요!`);
  }
};
