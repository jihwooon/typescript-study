import './Expenses.css'
import { ExpenseItem } from './ExpenseItem'

export const Expenses = (props) => {

    return (
        <div className='expenses'>
            {props.items.map(((items) =>
                <ExpenseItem
                    title={items.title}
                    amount={items.amount}
                    date={items.date}
                />
            ))}
        </div>
    );
}
