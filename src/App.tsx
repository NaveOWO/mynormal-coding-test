import Layout from './components/common/Layout';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useToast } from './hooks/common/useToast';
import { ToastMessage } from './components/common/Toast';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Suspense } from 'react';

export default function App() {
  const { showToast } = useToast();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
        onSuccess() {
          showToast();
        },
        onError() {
          showToast();
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Suspense>
          <Layout>
            <RouterProvider router={router} />
            <ToastMessage />
          </Layout>
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
