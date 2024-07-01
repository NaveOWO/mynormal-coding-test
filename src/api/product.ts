import { PATH } from '../constants/path';
import { client } from './axios';

export const getProductsData = async ({ start }: { start: string }) => {
  const data = await client.get(`${PATH.products}?start=${start}`);

  return { data };
};

export const getProductDetailData = async ({ productName }: { productName: string }) => {
  const data = await client.get(`${PATH.productDetail(productName)}`);

  return { data };
};
