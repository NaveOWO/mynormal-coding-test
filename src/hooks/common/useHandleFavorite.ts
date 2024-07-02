import { useDeleteFavoriteSeller, usePostFavoriteSeller } from '../quries/seller';
import { favoriteStoreAction, useFavoriteStore } from '../zuztand/store';

export const useHandleFavorite = (seller: string) => {
  const { mutate: postFavorite } = usePostFavoriteSeller();
  const { mutate: deleteFavoite } = useDeleteFavoriteSeller();
  const favorites = useFavoriteStore((state) => state.favorites);
  const { register, unRegister } = useFavoriteStore(favoriteStoreAction);

  const registerFavorite = () => {
    postFavorite(seller, {
      onError: () => {
        unRegister(seller);
      },
    });
    register(seller);
  };

  const unRegisterFavorite = () => {
    deleteFavoite(seller, {
      onError: () => {
        register(seller);
      },
    });
    unRegister(seller);
  };

  return {
    favorites,
    registerFavorite,
    unRegisterFavorite,
  };
};
