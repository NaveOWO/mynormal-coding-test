import { Suspense } from 'react';
import PageTitle from '../components/common/PageTitle';
import MainProductList from '../components/mainProduct/MainProductList';
import ErrorBoundary from '../components/common/errorBoundary/ErrorBoundary';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function MainListPage() {
  return (
    <>
      <PageTitle title={`인아웃 슈즈\n이달의 상품 추천`} />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <MainProductList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
