import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import background from '../../assets/images/PaintedBackground.png';
import theme from '../../styles/theme';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Background>
      <ContentSection>{children}</ContentSection>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentSection = styled.section`
  width: 43rem;
  height: 100vh;

  padding: 4.1rem 1.4rem;

  background-color: ${theme.colors.white};
  overflow: scroll;
`;
