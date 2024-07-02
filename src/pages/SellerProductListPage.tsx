import { Suspense } from 'react';
import PageTitle from '../components/common/PageTitle';
import SellerProductList from '../components/sellerProduct/SellerProductList';
import Favorite from '../components/common/Favorite';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../components/common/errorBoundary/ErrorBoundary';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useHandleFavorite } from '../hooks/common/useHandleFavorite';

export default function SellerProductListPage() {
  const { seller } = useParams();
  const { favorites, registerFavorite, unRegisterFavorite } = useHandleFavorite(seller);

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
