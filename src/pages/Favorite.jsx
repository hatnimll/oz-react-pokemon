import { useSelector } from 'react-redux';
import { selectFavoritePokemons } from '../RTX/selector';
import { Card } from '../components/Card';

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
