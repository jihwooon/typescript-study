import Header from "../components/Header";
import { foramtNumber } from "../utils/format";

const COUNT = 10000;

const Home = () => {
  return (
    <>
      <Header />
      <div>book body</div>
      <div>count: {foramtNumber(COUNT)}</div>
    </>
  );
};

export default Home;
