import { useDeleteFavoriteSeller, usePostFavoriteSeller } from '../quries/seller';
import { favoriteStoreAction, useFavoriteStore } from '../zuztand/store';
import { useToast } from './useToast';

export const useHandleFavorite = (seller: string) => {
  const { mutate: postFavorite } = usePostFavoriteSeller();
  const { mutate: deleteFavoite } = useDeleteFavoriteSeller();
  const favorites = useFavoriteStore((state) => state.favorites);
  const { register, unRegister } = useFavoriteStore(favoriteStoreAction);

  const { setMessage } = useToast();

  const registerFavorite = () => {
    postFavorite(seller, {
      onSuccess: () => {
        register(seller);

        setMessage('관심셀러에 등록했어요!');
      },
      onError: () => {
        unRegister(seller);

        setMessage('다시 시도해주세요!');
      },
    });
  };

  const unRegisterFavorite = () => {
    deleteFavoite(seller, {
      onSuccess: () => {
        unRegister(seller);

        setMessage('관심셀러를 해제했어요!');
      },
      onError: () => {
        register(seller);

        setMessage('다시 시도해주세요!');
      },
    });
  };

  return {
    favorites,
    registerFavorite,
    unRegisterFavorite,
  };
};
