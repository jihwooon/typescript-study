import React from 'react'
import Expense from "./components/Expense"
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expense = [
    { title: 'Car Insurance', amount: 788.49, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 8, 13) },
    { title: 'New Dask(Wooden)', amount: 450, date: new Date(2011, 6, 11) }
  ]

  const addExpenseHandler = (expenses) => {
    console.log('In App.js')
    console.log(expenses)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
    </div>
  );
}

export default App;
