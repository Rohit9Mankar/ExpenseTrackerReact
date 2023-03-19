import { useRef, useState } from "react";
import classes from './ChangePassword.module.css';

const ChangePasswordForm = () => {
    const RegisteredEmailRef = useRef();
    const [sendingRequest, setSendingRequest] = useState(false);


    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredRegisteredMail = RegisteredEmailRef.current.value;
        setSendingRequest(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDfaJjy3LS1PJdi1F6WXFp9vNutlkkdJwA', {
            method: 'POST',
            body: JSON.stringify({
                requestType: "PASSWORD_RESET",
                email: enteredRegisteredMail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res) => {
            setSendingRequest(false);
            const data_1 = await res.json();
            if (res.ok) {
                console.log("Password reset Link sent to the registered email", res.status);


            }
            else {

                let errorMessag = "Authentication failed";
                if (data_1 && data_1.error && data_1.error.message) {
                    errorMessag = data_1.error.message;
                }
                alert(errorMessag)
            }
        })
    }

    return (
     
            <form onSubmit={formSubmitHandler} className={classes.change_form}>
                <div className={classes.control}>
                    <label>Enter the email with which you have registered</label>
                    <input type="text" placeholder="Email" ref={RegisteredEmailRef} required></input>
                </div>
                <div className={classes.actions}>
                    <button type="submit">
                        {sendingRequest ? "Sending link to entered email" : "Send Link"}
                    </button>
                </div>
            </form>
        
    )

}
export default ChangePasswordForm;