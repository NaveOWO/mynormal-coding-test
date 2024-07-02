import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useToast } from '../../hooks/common/useToast';

const slideIn = keyframes`
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, 0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translate(-50%, 0%);
  }
  to {
    transform: translate(-50%, 200%);
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  padding: 1rem 5rem;
  background-color: ${({ theme }) => theme.colors.red_light};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  animation:
    ${slideIn} 0.5s forwards,
    ${slideOut} 0.5s 1s forwards;

  ${({ theme }) => theme.fonts.body_2}
`;

export const ToastMessage = () => {
  const { message, show, hideToast } = useToast();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => hideToast(), 1500);
      return () => clearTimeout(timer);
    }
  }, [show, message]);

  if (!show) return null;

  return <Toast>{message}</Toast>;
};
