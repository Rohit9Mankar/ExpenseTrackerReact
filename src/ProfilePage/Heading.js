import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../Store/AuthContext';
import classes from './Heading.module.css';

const Heading = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const completeNowHandler = (event) => {
        event.preventDefault();
        history.replace('/profile/update')
    }

    const logoutHandler = (event) => {
        event.preventDefault();
        authCtx.logout();
        history.replace('/');
    }

    return (
        <React.Fragment>
            <header className={classes.heading}>
                <h6>Welcome to the Expense Tracker</h6>
                <p>Your profile is incomplete.
                    <button onClick={completeNowHandler}>Complete now</button></p>

            </header>
            <div className={classes.actions}>
            <button onClick={logoutHandler}>Logout</button>
            </div>
            
            <hr></hr>
        </React.Fragment>

    )
}
export default Heading;