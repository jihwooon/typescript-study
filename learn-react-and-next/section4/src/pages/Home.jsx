import { useEffect, useState } from 'react';
import { fetchCountries } from '../api';

function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();

    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return <div>Home</div>;
}

export default Home;
