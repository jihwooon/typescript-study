import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../api';

function Country() {
  const params = useParams();
  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(params.code);

    return setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  return <div>Country: {params.code}</div>;
}

export default Country;
