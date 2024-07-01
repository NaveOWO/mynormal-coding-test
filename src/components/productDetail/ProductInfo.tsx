import React from 'react';
import styled from 'styled-components';
import shoes3 from '../../assets/images/shoes3.jpeg';
import { useGetProductDetail } from '../../hooks/quries/products';
import QueryString from 'qs';
import { useParams } from 'react-router-dom';
import Favorite from '../common/Favorite';
import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';

export default function ProductInfo() {
  const { product } = useParams();

  const { data: productInfo } = useGetProductDetail(product as string);
  return (
    <>
      <ImageWrapper>
        <img src={shoes3} />
      </ImageWrapper>
      <InfoContainer>
        <Seller>{productInfo.seller}</Seller>
        <Name>{productInfo.name}</Name>
        <Price>{productInfo.price}</Price>
      </InfoContainer>
      <Favorite
        type='vertical'
        style={{ position: 'absolute', top: '38rem', right: '3.3rem' }}
      />
    </>
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
