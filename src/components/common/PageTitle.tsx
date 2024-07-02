import styled from 'styled-components';

interface Props {
  title: string;
}

export default function PageTitle(props: Props) {
  const { title } = props;

  return <Title>{title}</Title>;
}

const Title = styled.h1`
  margin-bottom: 2rem;

  ${({ theme }) => theme.fonts.title}
`;
