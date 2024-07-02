import { useDeleteFavoriteSeller, usePostFavoriteSeller } from '../quries/seller';
import { useFavoriteStore } from '../zuztand/store';

export const useHandleFavorite = (seller: string) => {
  const { mutate: postFavorite, isPending: postPending } = usePostFavoriteSeller();
  const { mutate: deleteFavoite, isPending: deletePending } = useDeleteFavoriteSeller();
  const { favorites, register, unRegister } = useFavoriteStore();

  const registerFavorite = () => {
    postFavorite(seller);
    register(seller);
  };

  const unRegisterFavorite = () => {
    deleteFavoite(seller);
    unRegister(seller);
  };

  return {
    favorites,
    registerFavorite,
    unRegisterFavorite,
    postPending,
    deletePending,
  };
};
