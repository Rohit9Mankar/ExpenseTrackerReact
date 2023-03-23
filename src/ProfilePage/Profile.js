import DailyExpense from "../Components/DailyExpenses/DailyExpenses";
import classes from './Profile.module.css';
import Heading from "./Heading"
import VerifyUser from "./VerifyUser";
import { useSelector } from "react-redux";

const Profile=()=>{
    const theme=useSelector(state=> state.theme.Blacktheme);

    return(
        <div style={{width:"100%"}} className={theme ? classes.whiteTheme : classes.blackTheme}>
        <Heading />
        <VerifyUser/>
        <DailyExpense />
        </div>
        
    )
}
export default Profile;