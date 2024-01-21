import { Route, Routes } from 'react-router-dom';
import Country from './pages/Country';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/country" element={<Country />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
