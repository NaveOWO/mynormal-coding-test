import { PropsWithChildren, createContext, useCallback, useState } from 'react';

export const ToastContext = createContext({
  message: '',
  setMessage: (message: string) => {},
  show: false,
  showToast: () => {},
  hideToast: () => {},
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const showToast = useCallback(() => {
    setShow(true);
  }, []);

  const hideToast = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <ToastContext.Provider value={{ message, setMessage, show, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};
