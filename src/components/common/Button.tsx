import { ComponentPropsWithoutRef } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

interface Props extends ComponentPropsWithoutRef<'button'> {
  size?: 'big' | 'small';
  border?: boolean;
  backgroundColor?: 'black' | 'transparent';
  style?: CSSProperties;
  fontStyle?: '1' | '2';
  text: string;
}

export default function Button(props: Props) {
  const {
    size = 'big',
    border = false,
    backgroundColor = 'black',
    style,
    fontStyle = '1',
    text,
    ...restProps
  } = props;

  return (
    <StyledButton
      size={size}
      border={border}
      backgroundColor={backgroundColor}
      fontStyle={fontStyle}
      style={{ ...style }}
      {...restProps}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  size?: 'big' | 'small';
  border?: boolean;
  backgroundColor?: 'black' | 'transparent';
  fontStyle: '1' | '2';
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => (size === 'big' ? '14.8rem' : '6rem')};
  height: ${({ size }) => (size === 'big' ? '4.8rem' : '3rem')};

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor === 'black' ? theme.colors.black : 'transparent'};
  border: ${({ theme, border }) =>
    border ? `solid 0.1rem ${theme.colors.black}` : 'none'};
  border-radius: 20px;
  color: ${({ theme, backgroundColor }) =>
    backgroundColor === 'black' ? theme.colors.white : theme.colors.black};

  ${({ theme, fontStyle }) => theme.fonts[`button_${fontStyle}`]};
`;
