const VerifyUser=()=>{

const verifyUserHandler=(event)=>{
    const token=localStorage.getItem("token");

    event.preventDefault();
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDfaJjy3LS1PJdi1F6WXFp9vNutlkkdJwA',{
        method: 'POST',
        body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (res) => {
        const data_1 = await res.json();
        if (res.ok) {
           console.log("Verification link sent to the registered email",res.status);
          

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


return(
    <>
    <button onClick={verifyUserHandler}
    style={{
        textAlign:"center",
        background:"red",
        color:"white",
        borderRadius:"8px",
        border:"1px solid red",
    margin:"2rem 15rem"}}
    >Verify E-mail</button>
    </>
)
}
export default VerifyUser;