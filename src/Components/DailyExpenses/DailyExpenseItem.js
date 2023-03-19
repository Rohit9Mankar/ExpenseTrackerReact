import classes from './DailyExpense.module.css';

const DailyExpenseItem=(props)=>{
    return (
        <div className={classes.expenseItem}>
            <div>{props.description}</div>
            <div>$ {props.amount}</div>
            <div>{props.category}</div>
        </div>
    )
}
export default DailyExpenseItem;