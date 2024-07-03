import { PropsWithChildren, createContext, useCallback, useState } from 'react';

export const ToastContext = createContext({
  message: '',
  setMessage: (message: string) => {},
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState('');

  return (
    <ToastContext.Provider value={{ message, setMessage }}>
      {children}
    </ToastContext.Provider>
  );
};
