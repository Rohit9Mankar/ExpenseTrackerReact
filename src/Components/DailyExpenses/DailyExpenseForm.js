import { useContext, useRef } from "react";
import AuthContext from "../../Store/AuthContext";
import classes from './DailyExpense.module.css';

const DailyExpenseForm = () => {

    const authCtx = useContext(AuthContext);

    const DescriptionInputRef = useRef();
    const AmountInputRef = useRef();
    const CategoryInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseToBeAdded = {
            id: Math.random().toString(),
            description: DescriptionInputRef.current.value,
            amount: AmountInputRef.current.value,
            category: CategoryInputRef.current.value
        }
        authCtx.addExpense(expenseToBeAdded);
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
                <option value="Petrol">Petrol</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
            </select>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
};
export default DailyExpenseForm;