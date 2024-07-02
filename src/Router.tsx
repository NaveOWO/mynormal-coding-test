import { createBrowserRouter } from 'react-router-dom';
import MainListPage from './pages/MainListPage';
import SellerProductListPage from './pages/SellerProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainListPage />,
  },
  {
    path: '/sellers/:seller',
    element: <SellerProductListPage />,
  },
  {
    path: '/products/:product',
    element: <ProductDetailPage />,
  },
]);
