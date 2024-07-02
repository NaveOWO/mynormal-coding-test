import filledFavorite from '../../assets/icons/favorite_fill.svg';
import emptyFavorite from '../../assets/icons/favorite_empty.svg';
import styled, { CSSProperties } from 'styled-components';

export type FavoriteType = 'simple' | 'vertical' | 'horizontal';
type FavoriteState = 'fill' | 'empty';

interface Props {
  type?: FavoriteType;
  style?: CSSProperties;
  state?: FavoriteState;
  onChangeState?: (state: FavoriteState) => void;
}

export default function Favorite(props: Props) {
  const { type = 'horizontal', style, state = 'empty', onChangeState } = props;

  return (
    <Container style={{ ...style }} type={type}>
      <FavorateButton
        onClick={() => {
          onChangeState?.(state);
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

const Container = styled.div<{ type?: FavoriteType }>`
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
