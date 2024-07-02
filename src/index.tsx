import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { ToastProvider } from './context/toastContext';

const startApp = async () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Suspense>
          <ToastProvider>
            <App />
          </ToastProvider>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>,
  );
};

startApp();
