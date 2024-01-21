import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  return <div>Search {searchParams.get('q')}</div>;
}

export default Search;
