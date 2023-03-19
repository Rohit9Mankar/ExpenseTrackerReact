import DailyExpense from "../Components/DailyExpenses/DailyExpenses";
import Heading from "./Heading"
import VerifyUser from "./VerifyUser";

const Profile=()=>{
    return(
        <div style={{width:"100%"}}>
        <Heading />
        <VerifyUser/>
        <DailyExpense />
        </div>
        
    )
}
export default Profile;