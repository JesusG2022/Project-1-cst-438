import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/");
        console.log("Sign Up button clicked");
    };

    return (
    <div className="SignUp">
        <h1 className="Title">Sign Up</h1>
        <div className="ButtonContainer">
            <button onClick={handleSignUp}>Sign Up</button> <br />
            <br />
            <button onClick={() => navigate("/")} > back</button>
        </div>
    </div>);
}
 
export default SignUp;