import { fetchCountries } from '@/api';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ countries }) {
  const code = "KOR"
  const router = useRouter()

  const onClick = () => {
    router.push('/search')
  }

  return (
    <>
      <div>Home Page
        <div>
          <button onClick={onClick}>Search 페이지로 이동</button>
        </div>
      </div>
      <div>
        <Link href={"/search"}>Search Page 이동</Link>
      </div>
      <div>
        <Link href={{
          pathname: "/country/[code]",
          query: { code: code},
        }}>{code} 페이지 이동</Link>
     </div>
     <div>
        {countries.map((country) => (
          <div key={country.code}>{country.commonName}</div>
        ))}
     </div>
    </>
  );
}

export const getServerSideProps = async () => {

  const countries = await fetchCountries()

  return {
    props: {
      countries
    },
  }
}