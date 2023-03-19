import { useContext } from "react"
import AuthContext from "../../Store/AuthContext"
import DailyExpenseItem from "./DailyExpenseItem";
import classes from './DailyExpense.module.css';

const DailyExpenseList = () => {
    const authCtx = useContext(AuthContext);

    const listOfExpenseItems = authCtx.expenses.map((item) => (
        <DailyExpenseItem
            key={item.id}
            id={item.id}
            description={item.description}
            amount={item.amount}
            category={item.category} />
    ))

    return (
        <div className={classes.listExpense}>
            <h2>Expenses List</h2>
            {listOfExpenseItems}
        </div>
    )
}
export default DailyExpenseList;