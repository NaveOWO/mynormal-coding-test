import QueryString from 'qs';
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useGetSellerProductsData } from '../../hooks/quries/seller';
import { useRouter } from '../../hooks/common/useRouter';
import ProductItem from './ProductItem';
import Button from '../common/Button';
import { useParams } from 'react-router-dom';

export default function SellerProductList() {
  const start =
    QueryString.parse(location.search, {
      ignoreQueryPrefix: true,
    }).start ?? '0';

  const { allData, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetSellerProductsData();
  const router = useRouter();

  return (
    <>
      <ListContainer>
        {allData.map((item) => {
          return <ProductItem key={item.name} name={item.name} price={item.price} />;
        })}
        {isFetchingNextPage && new Array(4).fill('_').map(() => <SkeletonItem />)}
      </ListContainer>
      {hasNextPage && (
        <ButtonWrapper>
          <Button
            size='small'
            backgroundColor='transparent'
            border={true}
            text='더보기'
            onClick={() => {
              router.push('', { start: Number(start) + 4 });
              fetchNextPage();
            }}
          />
        </ButtonWrapper>
      )}
    </>
  );
}

const SkeletonItem = () => {
  return (
    <ItemSection>
      <ImageContainer>
        <SkeletonBox />
      </ImageContainer>
      <InfoContainer>
        <NameSkeleton />
        <PriceSkeleton />
      </InfoContainer>
    </ItemSection>
  );
};

const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 2rem;
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: 100%;
  background: #eee;
  background: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`;

const ItemSection = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;

  border-radius: 15px;

  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 18rem;

  margin-top: 0.5rem;
  padding: 0 1rem;
`;

const FavoriteSkeleton = styled(SkeletonBox)`
  position: absolute;
  top: 14.5rem;
  right: 1.8rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

const NameSkeleton = styled(SkeletonBox)`
  width: 70%;
  height: 1.5rem;
  margin-top: 0.5rem;
`;

const PriceSkeleton = styled(SkeletonBox)`
  width: 30%;
  height: 1rem;
  margin-top: 0.5rem;
`;
