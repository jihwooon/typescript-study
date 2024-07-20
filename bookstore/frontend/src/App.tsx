import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";

const App = () => {
  return <Layout children={<Detail />} />;
};

export default App;
