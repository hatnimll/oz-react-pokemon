import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPokemonById } from '../RTX/selector';
import FavoriteButton from '../components/FavoriteButton';
import FlipCard from '../components/FlipCard';

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div className="flex flex-col justify-center items-center border border-[gray] py-[30px] rounded-[10px] bg-white px-[60px] border-b-[5px] border-r-[5px] border-black">
      <div className="text-[28px] mb-[10px]">
        {pokemon.name} <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
