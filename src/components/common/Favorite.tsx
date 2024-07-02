import { useState } from 'react';
import filledFavorite from '../../assets/icons/favorite_fill.svg';
import emptyFavorite from '../../assets/icons/favorite_empty.svg';
import styled, { CSSProperties } from 'styled-components';

interface Props {
  type?: 'simple' | 'vertical' | 'horizontal';
  style?: CSSProperties;
  initState?: 'fill' | 'empty';
  onChangeState?: (state: 'fill' | 'empty') => void;
}

export default function Favorite(props: Props) {
  const { type = 'horizontal', style, initState = 'empty', onChangeState } = props;
  const [state, setState] = useState<'fill' | 'empty'>(initState);

  const toggleFavorite = () => {
    setState((prev) => (prev === 'empty' ? 'fill' : 'empty'));
  };

  return (
    <Container style={{ ...style }} type={type}>
      <FavorateButton
        onClick={() => {
          onChangeState?.(state === 'fill' ? 'empty' : 'fill');
          toggleFavorite();
        }}
      >
        {state === 'fill' ? (
          <img src={filledFavorite} alt='filledFavorite' />
        ) : (
          <img src={emptyFavorite} alt='emptyFavorite' />
        )}
      </FavorateButton>
      {type !== 'simple' && <Text>관심셀러 등록</Text>}
    </Container>
  );
}

const Container = styled.div<{ type?: 'simple' | 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ type }) => (type === 'vertical' ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
`;

const FavorateButton = styled.button``;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.red_light};

  ${({ theme }) => theme.fonts.body_3};
`;
