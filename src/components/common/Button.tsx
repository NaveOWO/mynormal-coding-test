import { ComponentPropsWithoutRef } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type SizeType = 'big' | 'small';
type backgroundColorType = 'black' | 'transparent';
type FontStyleType = '1' | '2';

interface Props extends ComponentPropsWithoutRef<'button'> {
  size?: SizeType;
  border?: boolean;
  backgroundColor?: backgroundColorType;
  style?: CSSProperties;
  fontStyle?: FontStyleType;
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
  size?: SizeType;
  border?: boolean;
  backgroundColor?: backgroundColorType;
  fontStyle: FontStyleType;
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
