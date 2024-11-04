import { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTX/thunk.';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

const Main = lazy(() => import('./pages/main'));
const Detail = lazy(() => import('./pages/Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[48px] text-center border-t-[50px] border-t-[red] bg-black text-white">
        포켓몬 도감
      </h1>
      <nav className="flex gap-[20px] justify-center py-[10px] border-b border-b-black border-[2px]">
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <div>
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            className="border-b border-[darkgray] px-2 w-[120px]"
            type="text"
          />
          <span>🔎</span>
        </div>
      </nav>
      <main className="flex justify-center flex-wrap gap-[20px] pt-[20px] text-center bg-[darkgray] pb-[20px]">
        <Suspense fallback={<div>로딩 중...</div>}>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/detail/:pokemonId'} element={<Detail />} />
            <Route path={'/search'} element={<Search />} />
            <Route path={'/favorite'} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
