import { useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import {
  deleteFavoriteSeller,
  getSellerProductsData,
  postFavoriteSeller,
} from '../../api/seller';
import QueryString from 'qs';
import { useParams, useSearchParams } from 'react-router-dom';

const QUERY_KEY = {
  all: () => ['sellerProducts'],
  sellerProducts: () => [...QUERY_KEY.all()],
};

export const useGetSellerProductsData = () => {
  const { start } = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { seller } = useParams();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: QUERY_KEY.sellerProducts(),
      queryFn: ({ pageParam = start }) =>
        getSellerProductsData({ start: pageParam as string, sellerName: seller }),
      getNextPageParam: (lastPage) => {
        return lastPage.data.data.length < 4 ? undefined : (Number(start) + 4).toString();
      },
      initialPageParam: '0',
    });
  const allData = data.pages.flatMap((item) => item.data.data);

  return {
    allData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export const usePostFavoriteSeller = () => {
  const { mutate, isError } = useMutation({
    mutationFn: (sellerName: string) => postFavoriteSeller({ sellerName }),
  });

  if (isError) {
  }

  return { mutate };
};

export const useDeleteFavoriteSeller = () => {
  const { mutate, isError } = useMutation({
    mutationFn: (sellerName: string) => deleteFavoriteSeller({ sellerName }),
  });

  if (isError) {
  }

  return { mutate };
};
