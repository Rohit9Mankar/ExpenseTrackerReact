import { useContext } from 'react';
import AuthContext from '../../Store/AuthContext';
import classes from './DailyExpense.module.css';

const DailyExpenseItem = (props) => {
    const authCtx = useContext(AuthContext);

    const deleteHandler = (event) => {
       event.preventDefault();
        console.log(props.id);
        fetch(`https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses/${props.id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                authCtx.removeExpense(props.id);
                console.log("Successfully deleted the expense")
            }
            else {
                console.log(res.status);
            }
        })
    };

    const editHandler = (event) => {
      event.preventDefault();
     document.getElementById("description").value=props.description;
     document.getElementById("amount").value=props.amount;
     document.getElementById("dropdown-menu").value=props.category;
     deleteHandler(event);
    }

    return (
        <div className={classes.expenseItem}>
            <div>{props.description}</div>
            <div>$ {props.amount}</div>
            <div>{props.category}</div>
            <div>
                <button onClick={editHandler}>Edit</button>
            </div>
            <div>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}
export default DailyExpenseItem;