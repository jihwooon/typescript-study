import { useParams } from 'react-router-dom';

function Country() {
  const params = useParams();
  return <div>Country: {params.code}</div>;
}

export default Country;
