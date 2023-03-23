import { CSVLink } from 'react-csv';
import { useSelector} from "react-redux";
import DailyExpenseItem from "./DailyExpenseItem";
import classes from './DailyExpense.module.css';
import Toggle from "../../ProfilePage/ToggleButton";


const DailyExpenseList = () => {
    const expenses=useSelector(state => state.expense.expenses);


    const listOfExpenseItems = expenses.map((item) => (
        <DailyExpenseItem
            key={item.id}
            id={item.id}
            description={item.description}
            amount={item.amount}
            category={item.category} />
    ))

    let total=0;
    expenses.forEach((item)=>{
        total+=Number(item.amount);
    });
    console.log(total);

  

    return (
        <div className={classes.listExpense}>
            <h2>Expenses List</h2>
            <div className={classes.listHeading}>
                <div className={classes.listHeading_Items}>Title</div>
                <div className={classes.listHeading_Items}>Category</div>
                <div className={classes.listHeading_Items}>price</div>
            </div>
            {listOfExpenseItems}
            {total>10000 && <div className={classes.activatPremium}>
                <button>Activate premium</button>
                </div>}
                {total>1000 && <Toggle></Toggle>}
                <CSVLink data={expenses}>Download Expenses</CSVLink>
        </div>
    )
}
export default DailyExpenseList;