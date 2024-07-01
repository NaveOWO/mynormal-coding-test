import React, { Suspense } from 'react';
import styled from 'styled-components';
import shoes3 from '../../assets/images/shoes3.jpeg';
import { useGetProductDetail } from '../../hooks/quries/products';
import QueryString from 'qs';
import { useParams } from 'react-router-dom';
import Favorite from '../common/Favorite';
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

const ImageWrapper = styled.div`
  width: 35rem;
  height: 35rem;

  border-radius: 20px;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  width: 35rem;
  padding: 2rem;
`;

const Seller = styled.div`
  color: ${({ theme }) => theme.colors.gray300};

  ${({ theme }) => theme.fonts.body_4}
`;

const Name = styled.div`
  ${({ theme }) => theme.fonts.body_5}
`;

const Price = styled.div`
  ${({ theme }) => theme.fonts.body_5}
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 5rem;

  display: flex;
  gap: 2rem;
`;
