import { Suspense } from 'react';
import PageTitle from '../components/common/PageTitle';
import SellerProductList from '../components/sellerProduct/SellerProductList';
import Favorite from '../components/common/Favorite';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../components/common/errorBoundary/ErrorBoundary';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useDeleteFavoriteSeller, usePostFavoriteSeller } from '../hooks/quries/seller';
import { useFavoriteStore } from '../hooks/zuztand/store';

export default function SellerProductListPage() {
  const { seller } = useParams();
  const { mutate: postFavorite } = usePostFavoriteSeller();
  const { mutate: deleteFavoite } = useDeleteFavoriteSeller();
  const { favorites, register, unRegister } = useFavoriteStore();

  const registerFavorite = () => {
    postFavorite(seller);
    register(seller);
  };

  const unRegisterFavorite = () => {
    deleteFavoite(seller);
    unRegister(seller);
  };

  return (
    <>
      <PageTitle title={`${seller}의\n상품리스트`} />
      <Favorite
        initState={favorites.has(seller) ? 'fill' : 'empty'}
        onChangeState={(state) => {
          state === 'fill' ? registerFavorite() : unRegisterFavorite();
        }}
        style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}
      />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <SellerProductList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
