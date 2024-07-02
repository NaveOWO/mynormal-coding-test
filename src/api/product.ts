import { PATH } from '../constants/path';
import { ProductDetailResponseType, ProductsResponseType } from '../types/remote';
import { client } from './axios';

export const getProductsData = async ({ start }: { start: string }) => {
  const data = await client.get<ProductsResponseType>(`${PATH.products}?start=${start}`);

  return { data };
};

export const getProductDetailData = async ({ productName }: { productName: string }) => {
  const data = await client.get<ProductDetailResponseType>(
    `${PATH.productDetail(productName)}`,
  );

  return { data };
};
