
import { useDispatch} from "react-redux";
import { ExpenseActions } from "../../Store/ExpenseSlice";
import classes from './DailyExpense.module.css';

const DailyExpenseItem = (props) => {
    const dispatch=useDispatch();

    const deleteHandler = (event) => {
        console.log(props.id);
       event.preventDefault();
        console.log(props.id);
        fetch(`https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses/${props.id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
               
                dispatch(ExpenseActions.removeItem(props.id));
                console.log("Successfully deleted the expense")
            }
            else {
                return res.json().then((data)=>console.log(data));
            }
        })
    };

    const editHandler = (event) => {
      event.preventDefault();
     document.getElementById("description").value=props.description;
     document.getElementById("amount").value=props.amount;
     document.getElementById("dropdown-menu").value=props.category;
     
    }

    return (
        <div className={classes.expenseItem}>
            <div>{props.description}</div>
            <div>{props.category}</div>
            <div>$ {props.amount}</div>
            
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