import { PATH } from '../constants/path';
import { client } from './axios';

export const getSellerProductsData = async ({
  start,
  sellerName,
}: {
  start: string;
  sellerName: string;
}) => {
  const data = await client.get(`${PATH.seller(sellerName)}?start=${start}`);

  return { data };
};

export const postFavoriteSeller = async ({ sellerName }: { sellerName: string }) => {
  const data = await client.post(`${PATH.seller(sellerName)}:favorite`);

  return { data };
};

export const deleteFavoriteSeller = async ({ sellerName }: { sellerName: string }) => {
  const data = await client.delete(`${PATH.seller(sellerName)}:favorite`);

  return { data };
};
