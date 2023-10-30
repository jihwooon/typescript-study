import './Expenses.css'
import { ExpenseItem } from './ExpenseItem'

export const Expenses = ({ items }) => {

    return (
        <div className='expenses'>
            {items.map(((items, i) =>
                <ExpenseItem key={i} {...items} />
            ))}
        </div>
    );
}
