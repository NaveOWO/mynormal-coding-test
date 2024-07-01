import React, { Suspense } from 'react';
import ProductDetail from '../components/productDetail/ProductDetail';
import BackButton from '../components/common/BackButton';
import ErrorBoundary from '../components/common/errorBoundary/ErrorBoundary';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function ProductDetailPage() {
  return (
    <>
      <BackButton />
      <ProductDetail />
    </>
  );
}
