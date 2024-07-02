import { useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import {
  deleteFavoriteSeller,
  getSellerProductsData,
  postFavoriteSeller,
} from '../../api/seller';
import { useParams } from 'react-router-dom';
import { useToast } from '../common/useToast';
import { useEffect } from 'react';
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
  const { mutate, isSuccess, isError, isPending } = useMutation({
    mutationFn: (sellerName: string) => postFavoriteSeller({ sellerName }),
  });
  const { setMessage } = useToast();

  useEffect(() => {
    if (isSuccess) {
      setMessage('관심셀러에 등록했어요!');
    }

    if (isError) {
      setMessage('다시 시도해주세요!');
    }
  }, [isSuccess, isError]);

  return { mutate, isPending };
};

export const useDeleteFavoriteSeller = () => {
  const { mutate, isSuccess, isError, isPending } = useMutation({
    mutationFn: (sellerName: string) => deleteFavoriteSeller({ sellerName }),
  });

  const { setMessage } = useToast();

  useEffect(() => {
    if (isSuccess) {
      setMessage('관심셀러에 등록했어요!');
    }

    if (isError) {
      setMessage('다시 시도해주세요!');
    }
  }, [isSuccess, isError]);

  return { mutate, isPending };
};
