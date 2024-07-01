import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getProductDetailData, getProductsData } from '../../api/product';
import QueryString from 'qs';

const QUERY_KEY = {
  all: () => ['products'],
  products: () => [...QUERY_KEY.all()],
  detail: (productName: string) => [...QUERY_KEY.all(), productName],
};

export const useGetProductsData = () => {
  const { start } = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: QUERY_KEY.products(),
      queryFn: ({ pageParam = start }) => getProductsData({ start: pageParam as string }),
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

export const useGetProductDetail = (productName: string) => {
  const { data } = useSuspenseQuery({
    queryKey: QUERY_KEY.detail(productName),
    queryFn: () => getProductDetailData({ productName }),
  });

  return { data: data.data.data };
};
