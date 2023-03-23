import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import DailyExpenseForm from "./DailyExpenseForm";
import DailyExpenseList from "./DailyExpenseList";
import { ExpenseActions } from "../../Store/ExpenseSlice";

const DailyExpense = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses.json')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                        .then((data) => {
                            const loadedExpenses = [];
                            for (let key in data) {
                                loadedExpenses.push({
                                    id: key, ...data[key]
                                })

                            }
                            dispatch(ExpenseActions.loadExpense(loadedExpenses));

                        })
                }
            })


    }, [dispatch]);
    return (
        <Fragment>
            <DailyExpenseForm />
            <DailyExpenseList />
        </Fragment>
    )
}
export default DailyExpense;