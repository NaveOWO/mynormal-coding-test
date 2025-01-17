import arrow from '../../assets/icons/back_arrow.svg';
import { useRouter } from '../../hooks/common/useRouter';
import styled, { CSSProperties } from 'styled-components';

interface Props {
  step?: number;
  style?: CSSProperties;
}

export default function BackButton(props: Props) {
  const { step = 1, style } = props;
  const router = useRouter();

  const goBack = () => {
    router.back(step);
  };

  return (
    <IconWrapper onClick={goBack} style={style}>
      <img src={arrow} alt='back-arrow' />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: 6rem;

  cursor: pointer;
`;
