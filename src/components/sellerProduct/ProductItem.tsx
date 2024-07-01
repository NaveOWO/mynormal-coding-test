import React from 'react';
import styled from 'styled-components';
import shoes2 from '../../assets/images/shoes2.jpeg';
import { useRouter } from '../../hooks/common/useRouter';
import LoadingSpinner from '../common/LoadingSpinner';

interface Props {
  name: string;
  price: string;
}

export default function ProductItem(props: Props) {
  const { name, price } = props;
  const router = useRouter();

  const moveToProductDetailPage = () => {
    router.push(`/products/${name}`);
  };

  return (
    <ItemSection>
      <ImageContainer>
        <img src={shoes2} alt={name} />
      </ImageContainer>
      <InfoContainer>
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

const Name = styled.h2`
  ${({ theme }) => theme.fonts.body_2};

  text-overflow: ellipsis;
`;

const Price = styled.h2`
  ${({ theme }) => theme.fonts.body_3};

  text-overflow: ellipsis;
`;
