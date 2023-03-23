import { useRef } from "react";
import { useDispatch } from "react-redux";
import { ExpenseActions } from "../../Store/ExpenseSlice";
import classes from './DailyExpense.module.css';


const DailyExpenseForm = () => {
    const dispatch = useDispatch();


    const DescriptionInputRef = useRef();
    const AmountInputRef = useRef();
    const CategoryInputRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();
        const expenseToBeAdded = {

            description: DescriptionInputRef.current.value,
            amount: AmountInputRef.current.value,
            category: CategoryInputRef.current.value
        }
        const response = await fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses.json', {
            method: "POST",
            body: JSON.stringify(expenseToBeAdded),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(response.status);
        }

        const newResponse = await fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses.json')
        if (newResponse.ok) {
            const data = await newResponse.json();
            const loadedExpenses = [];
            for (let key in data) {
                loadedExpenses.push({
                    id: key, ...data[key]
                })

            }
            dispatch(ExpenseActions.loadExpense(loadedExpenses));
        }

        


    }

    return (
        <form onSubmit={submitHandler} className={classes.form_container}>
            <h2>Daily Expenses</h2>
            <label htmlFor="description">Description </label>
            <input
                type="text"
                id="description"
                ref={DescriptionInputRef}
            />
            <br />
            <label htmlFor="amount">Amount Spent</label>
            <input
                type="number"
                id="amount"
                ref={AmountInputRef}
            />
            <br />
            <label htmlFor="dropdown-menu">Category</label>
            <select id="dropdown-menu" ref={CategoryInputRef}>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Travel">Travel</option>
                <option value="Medical">Medical</option>
                <option value="Investment">Investment</option>
                <option value="Personal">Personal</option>
            </select>
            <br />
            <button type="submit">Submit</button>


        </form>

    )
};
export default DailyExpenseForm;