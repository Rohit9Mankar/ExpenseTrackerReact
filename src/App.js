import React from "react";
import { Route,Switch } from "react-router-dom";
import SignUpForm from "./Components/Signup/SignUpForm";

function App() {
  return (
    <Switch>
 <Route path='/'>
    <SignUpForm/>
  </Route>
  <Route path='/welcome'>
    <h2>Welcome to the Expense Tracker</h2>
  </Route>
    </Switch>
 
  )
}

export default App;
