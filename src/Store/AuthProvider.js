import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
    const toBeStoredToken = localStorage.getItem("token");

    const [tokenId, setTokenId] = useState(toBeStoredToken);
    const [expenseArray, setExpenseArray] = useState([]);

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

    const addExpenseHandler = (item) => {
        setExpenseArray((prev) => {
            return [...prev, item];
        })
    }

    const removeExpenseHandler=(id)=>{
        const updatedExpenses=expenseArray.filter((item)=>item.id===id);
        setExpenseArray(updatedExpenses);
    }

    useEffect(() => {

        fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/expenses.json')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                        .then((data) => {
                            const loadedExpenses = [];
                            for (let key in data) {
                                loadedExpenses.push({
                                    id:key,...data[key]
                                })
                                
                            }
                            
                            setExpenseArray(loadedExpenses);
                        })
                }
            })


    }, [expenseArray]);


    const authContext = {
        expenses: expenseArray,
        addExpense: addExpenseHandler,
        removeExpense:removeExpenseHandler,
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