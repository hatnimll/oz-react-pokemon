import { useDispatch, useSelector } from 'react-redux';
import { favoriteSlice } from '../RTX/slice';

function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemon: pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemon: pokemonId })
        );
      }}
      className={isFavorite ? 'text-red-600' : ''}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  );
}

export default FavoriteButton;
