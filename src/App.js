import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./Components/Signup/SignUpForm";
import ChangePassword from "./ForgotPasswordPage/ChangePassword";
import Profile from "./ProfilePage/Profile";
import UpdateProfile from "./ProfilePage/UpdateProfile";

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <SignUpForm />
      </Route>
      <Route path='/profile' exact>
        <Profile />
      </Route>
      <Route path='/profile/update'>
      <UpdateProfile />
      </Route>
      <Route path='/forgotPassword'>
        <ChangePassword/>
      </Route>
    </Switch>

  )
}

export default App;
