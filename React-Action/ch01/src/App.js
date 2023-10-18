import { ExpenseItem } from './components/ExpenseItem'

const App = () => {
    const expenses = [
        { id: 'e1', title: 'Total Paper', amount: 94.12, date: new Date(2021, 2, 28) },
        { id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 27) },
        { id: 'e3', title: 'Car Excident', amount: 256.12, date: new Date(2021, 4, 15) }
    ];

    return (
        <div>
            <h2>Let's get start</h2>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
        </div>
    )
}

export default App;
