import { useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import {
  deleteFavoriteSeller,
  getSellerProductsData,
  postFavoriteSeller,
} from '../../api/seller';
import { useParams } from 'react-router-dom';
import { getStringQS } from '../../utils/querystring';
import { SIZE } from '../../constants/product';

const QUERY_KEY = {
  all: () => ['sellerProducts'],
  sellerProducts: () => [...QUERY_KEY.all()],
};

export const useGetSellerProductsData = () => {
  const start = getStringQS('start');
  const { seller } = useParams();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: QUERY_KEY.sellerProducts(),
      queryFn: ({ pageParam = start }) =>
        getSellerProductsData({ start: pageParam as string, sellerName: seller }),
      getNextPageParam: (lastPage) => {
        return lastPage.data.data.length < SIZE
          ? undefined
          : (Number(start) + SIZE).toString();
      },
      initialPageParam: '0',
      select: (data) => data.pages.flatMap((item) => item.data.data),
    });

  return {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export const usePostFavoriteSeller = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (sellerName: string) => postFavoriteSeller({ sellerName }),
  });

  return { mutate, isPending };
};

export const useDeleteFavoriteSeller = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (sellerName: string) => deleteFavoriteSeller({ sellerName }),
  });

  return { mutate, isPending };
};
