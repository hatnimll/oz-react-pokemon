import { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTX/thunk.';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import { Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[48px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-3 justify-center">
        <Link to={'/'}>메인</Link>
        <Link to={'/detail/1'}>상세정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜목록</Link>
      </nav>
      <main className="flex justify-center flex-wrap gap-[20px] pt-[20px] text-center">
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/detail/:pokemonId'} element={<Detail />} />
          <Route path={'/search'} element={<Search />} />
          <Route path={'/favorite'} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
