import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
  const style = {
    h2: {
      color: "red"
    }
  }

  const number = Math.round(Math.random() * 99);
  console.log(number);

  const func = () => "func"

  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2 style={style.h2}>안녕 리액트{func()}</h2>
        <b>{number % 2 === 0 ? "짝수" : "홀수"}</b>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
