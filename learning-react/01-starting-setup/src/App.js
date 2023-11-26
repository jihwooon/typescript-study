import React from 'react'
import Expense from "./components/Expense"

const App = () => {
  const expense = [
    { title: 'Car Insurance', amount: 788.49, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 8, 13) },
    { title: 'New Dask(Wooden)', amount: 450, date: new Date(2011, 6, 11) }
  ]

  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement('p', {}, "This is also visible!"),
    React.createElement(Expense, { items: expense }),
  );

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <p>This is also visible!</p>
  //     <Expense items={expense} />
  //   </div>
  // );
}

export default App;
