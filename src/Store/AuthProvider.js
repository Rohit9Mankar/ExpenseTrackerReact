import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
    const toBeStoredToken = localStorage.getItem("token");

    const [tokenId, setTokenId] = useState(toBeStoredToken);
    const [expenseArray,setExpenseArray]=useState([]);

    const userLoggedIn = !!tokenId;

    const loginUserHandler = (responseToken) => {

        setTokenId(responseToken);
        localStorage.setItem("token", responseToken);

        console.log(responseToken);

        // setTimeout(()=>{
        //     logoutUserHandler();
        // },3000000)

    };

    const logoutUserHandler = () => {
        setTokenId(null);
        localStorage.removeItem("token");
       
    }

const addExpenseHandler=(item)=>{
    setExpenseArray((prev)=>{
        return [...prev,item];
    })
}



    const authContext = {
        expenses:expenseArray,
        addExpense:addExpenseHandler,
        tokens: tokenId,
        isLoggenIn: userLoggedIn,
        login: loginUserHandler,
        logout: logoutUserHandler


    };

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;