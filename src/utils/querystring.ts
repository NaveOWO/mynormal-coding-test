import QueryString from 'qs';
import { z } from 'zod';

export const getStringQS = (target: string) => {
  const qs = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  if (!(target in qs)) {
    throw new Error(`쿼리스트링에 해당 값이 존재하지 않습니다!`);
  }

  try {
    return z.string().parse(qs[target]);
  } catch (error) {
    throw new Error(`쿼리스트링을 {string}={string}의 형태로 설정해주세요!`);
  }
};
