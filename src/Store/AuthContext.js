import React from "react";

const AuthContext=React.createContext({

    tokens: "",
    isLoggenIn: false,
    login: ()=>{},
    logout: ()=>{}
})
export default AuthContext;