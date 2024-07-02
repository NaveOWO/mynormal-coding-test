import { useContext } from 'react';
import { ToastContext } from '../../context/toastContext';

export const useToast = () => {
  const toastContext = useContext(ToastContext);

  return {
    ...toastContext,
  };
};
