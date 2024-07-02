import { Component, PropsWithChildren } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './errorboundary.type';
import styled from 'styled-components';

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null,
};

class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<ErrorBoundaryProps>) {
    super(props);

    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { didCatch: true, error };
  }

  componentDidUpdate(_: ErrorBoundaryProps, prevState: ErrorBoundaryState) {
    const { didCatch } = this.state;

    if (didCatch && prevState.error !== null) {
      this.props.onReset?.();

      this.setState(initialState);
    }
  }

  resetErrorBoundary() {
    const { error } = this.state;

    if (error !== null) {
      this.props.onReset?.();

      this.setState(initialState);
    }
  }

  render() {
    const { didCatch } = this.state;
    const { children } = this.props;

    if (didCatch) {
      return (
        <Fallback>
          데이터를 불러오지 못했어요
          <ResetButton onClick={() => this.resetErrorBoundary()}>
            다시 요청하기
          </ResetButton>
        </Fallback>
      );
    }
    return children;
  }
}

const Fallback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.red_light};
  text-align: center;
  margin-top: 15rem;
  gap: 2rem;

  ${({ theme }) => theme.fonts.body_1}
`;

const ResetButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.red_light};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;

  ${({ theme }) => theme.fonts.body_1}
`;

export default ErrorBoundary;
