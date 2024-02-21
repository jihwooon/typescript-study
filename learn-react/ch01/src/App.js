import './App.css';
import Counter from './Counter';
import Container from './Container';

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5
  }

  return (
    <Container>
      <div className="App">
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
