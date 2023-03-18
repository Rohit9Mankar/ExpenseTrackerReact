import classes from './UpdateProfile.module.css';
import { useRef } from 'react';

const UpdateProfile=()=>{
    const FullNameInputRef=useRef();
    const ProfileURLInputRef=useRef();

const updateProfileHandler=(event)=>{
    event.preventDefault();
    const enteredFullName=FullNameInputRef.current.value;
    const enteredProfileURL=ProfileURLInputRef.current.value;
    const token=localStorage.getItem("token");

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDfaJjy3LS1PJdi1F6WXFp9vNutlkkdJwA',{
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
          displayName: enteredFullName,
          photoUrl:enteredProfileURL,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(async (res) => {
     
        if (res.ok) {
          console.log("Profile updated")
         
        }
        else {
          const data_1 = await res.json();
          let errorMessag = "Authentication failed";
          if (data_1 && data_1.error && data_1.error.message) {
            errorMessag = data_1.error.message;
          }
          alert(errorMessag)
        }
      })
}

return(
    <div>
          <header className={classes.heading}>
                <h6>Winners never quit, Quitters never win.</h6>
                <p>Your profile is 64 % completed.A complete profile has higher chances of landing a job. <button>Complete now</button></p>

            </header>
            <hr></hr>

        <form onSubmit={updateProfileHandler} className={classes.form_contain}>

            <button type="button" style={{float:"inline-end" ,margin:"10px"}}>Cancel</button>

            <h4>Contact Details</h4>
            <div className={classes.form_control}>
            <label>Full Name</label>
            <input type="text" ref={FullNameInputRef}></input>

            <label>Profile Photo URL</label>
            <input type="text" ref={ProfileURLInputRef}></input>
            </div>
            <button type="submit">Update</button>
        </form>
    </div>
)
}
export default UpdateProfile;