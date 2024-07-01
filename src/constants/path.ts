export const PATH = {
  products: '/',
  seller: (sellerName: string) => `/sellers/${sellerName}`,
  productDetail: (productName: string) => `/products/${productName}`,
};
