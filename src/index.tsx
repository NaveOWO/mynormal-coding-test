import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const startApp = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Suspense>
            <App />
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
};

startApp();
