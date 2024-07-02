import { Suspense } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';
import ProductInfo from './ProductInfo';
import ErrorBoundary from '../common/errorBoundary/ErrorBoundary';

export default function ProductDetail() {
  return (
    <Container>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductInfo />
        </Suspense>
      </ErrorBoundary>
      <ButtonWrapper>
        <Button
          text='장바구니'
          backgroundColor='transparent'
          fontStyle='2'
          border={true}
        />
        <Button text='구매하기' fontStyle='2' />
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 5rem;

  display: flex;
  gap: 2rem;
`;
