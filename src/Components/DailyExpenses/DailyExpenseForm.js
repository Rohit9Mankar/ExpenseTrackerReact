import { useContext, useRef } from "react";
import AuthContext from "../../Store/AuthContext";
import classes from './DailyExpense.module.css';

const DailyExpenseForm = () => {

    const authCtx = useContext(AuthContext);

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
       const response= await fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses.json', {
            method: "POST",
            body: JSON.stringify(expenseToBeAdded),
            headers: {
                'Content-Type': 'application/json'
              }
        });

       if(response.ok){
        console.log(response.status);
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