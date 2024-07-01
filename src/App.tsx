import * as React from 'react';
import Layout from './components/common/Layout';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}
