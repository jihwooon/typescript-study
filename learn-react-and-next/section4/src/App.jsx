import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Country from './pages/Country';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  const nav = useNavigate();

  const onClick = () => {
    nav('/search');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/country">Country</Link>

        <button onClick={onClick}>서치페이지로 이동</button>
      </div>
    </>
  );
}

export default App;
