import { useSearchParams } from "react-router"

function Home() {
  const [params, setParams] = useSearchParams()
  console.log(params.get('value'))

  return (
    <div>{params}</div>
  )
}

export default Home
