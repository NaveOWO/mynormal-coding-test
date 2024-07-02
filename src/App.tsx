import Layout from './components/common/Layout';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useToast } from './hooks/common/useToast';
import { ToastMessage } from './components/common/Toast';

export default function App() {
  const { showToast } = useToast();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
      },
      mutations: {
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
      <Layout>
        <RouterProvider router={router} />
        <ToastMessage />
      </Layout>
    </QueryClientProvider>
  );
}
