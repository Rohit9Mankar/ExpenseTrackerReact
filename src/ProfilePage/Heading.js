import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Heading.module.css';

const Heading = () => {
    const history = useHistory();

    const completeNowHandler = (event) => {
        event.preventDefault();
        history.replace('/profile/update')
    }
    return (
        <React.Fragment>
            <header className={classes.heading}>
                <h6>Welcome to the Expense Tracker</h6>
                <p>Your profile is incomplete.
                    <button onClick={completeNowHandler}>Complete now</button></p>

            </header>
            <hr></hr>
        </React.Fragment>

    )
}
export default Heading;