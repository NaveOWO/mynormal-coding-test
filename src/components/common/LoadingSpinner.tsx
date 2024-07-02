import styled, { keyframes } from 'styled-components';

export default function LoadingSpinner() {
  return <Spinner />;
}

const FadInOut = keyframes`
  0%, 80%, 100% { 
    box-shadow: 0 2.5em 0 -1.3em; 
  }
  40% { 
    box-shadow: 0 2.5em 0 0; 
  }
`;

const Spinner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${({ theme }) => theme.colors.red_light};
  font-size: 7px;
  text-indent: -9999em;
  transform: translateZ(0);
  animation: ${FadInOut} 1.8s infinite ease-in-out;
  animation-delay: -0.16s;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${FadInOut} 1.8s infinite ease-in-out;
  }

  &::before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &::after {
    left: 3.5em;
  }
`;
