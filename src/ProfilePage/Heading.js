import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './Heading.module.css';
import { AuthActions } from '../Store/AuthSlice';

const Heading = () => {
    const history = useHistory();
    const dispatch=useDispatch();

    const completeNowHandler = (event) => {
        event.preventDefault();
        history.replace('/profile/update')
    }

    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(AuthActions.logout());
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