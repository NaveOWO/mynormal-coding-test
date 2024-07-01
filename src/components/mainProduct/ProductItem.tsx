import React from 'react';
import styled from 'styled-components';
import shoes1 from '../../assets/images/shoes1.jpeg';
import Favorite from '../common/Favorite';
import {
  useDeleteFavoriteSeller,
  usePostFavoriteSeller,
} from '../../hooks/quries/seller';
import { useRouter } from '../../hooks/common/useRouter';

interface Props {
  seller: string;
  name: string;
  price: string;
}

export default function ProductItem(props: Props) {
  const { seller, name, price } = props;
  const { mutate: postFavorite } = usePostFavoriteSeller();
  const { mutate: deleteFavoite } = useDeleteFavoriteSeller();
  const router = useRouter();

  const moveToSellerProductListPage = () => {
    router.push(`/sellers/${seller}`, { start: 0 });
  };

  const moveToProductDetailPage = () => {
    router.push(`/products/${name}`);
  };
  return (
    <ItemSection>
      <ImageContainer>
        <img src={shoes1} alt={name} />
      </ImageContainer>
      <InfoContainer>
        <Favorite
          type='simple'
          style={{ position: 'absolute', top: '14.5rem', right: '1.8rem' }}
          onChangeState={(state) => {
            state === 'fill' ? postFavorite(seller) : deleteFavoite(seller);
          }}
        />
        <Seller onClick={moveToSellerProductListPage}>{seller}</Seller>
        <Name onClick={moveToProductDetailPage}>{name}</Name>
        <Price>{price}</Price>
      </InfoContainer>
    </ItemSection>
  );
}

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

const Seller = styled.h2`
  ${({ theme }) => theme.fonts.body_1};

  color: ${({ theme }) => theme.colors.gray300};
  text-overflow: ellipsis;
  cursor: pointer;
`;

const Name = styled.h2`
  ${({ theme }) => theme.fonts.body_2};

  text-overflow: ellipsis;
  cursor: pointer;
`;

const Price = styled.h2`
  ${({ theme }) => theme.fonts.body_3};

  text-overflow: ellipsis;
`;