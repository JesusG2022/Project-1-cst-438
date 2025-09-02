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
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <button onClick={handleSignUp}>Sign Up</button> <br />
            <br />
            <button onClick={() => navigate("/")} > back</button>
        </div>
    </div>);
}
 
export default SignUp;