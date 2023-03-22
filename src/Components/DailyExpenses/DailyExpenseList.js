import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import DailyExpenseItem from "./DailyExpenseItem";
import classes from './DailyExpense.module.css';
import { ExpenseActions } from "../../Store/ExpenseSlice";

const DailyExpenseList = () => {
    const expenses=useSelector(state => state.expense.expenses);
const dispatch=useDispatch();

    const listOfExpenseItems = expenses.map((item) => (
        <DailyExpenseItem
            key={item.id}
            id={item.id}
            description={item.description}
            amount={item.amount}
            category={item.category} />
    ))

    useEffect(() => {

        fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses.json')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                        .then((data) => {
                            const loadedExpenses = [];
                            for (let key in data) {
                                loadedExpenses.push({
                                    id:key,...data[key]
                                })
                                
                            }
                            dispatch(ExpenseActions.loadExpense(loadedExpenses));
                            
                        })
                }
            })


    }, [expenses]);

    return (
        <div className={classes.listExpense}>
            <h2>Expenses List</h2>
            {listOfExpenseItems}
        </div>
    )
}
export default DailyExpenseList;