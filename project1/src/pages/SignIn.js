import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/home");
        console.log("Sign In button clicked");
    };

    return (
    <div className="SignIn">
        <h1 className="Title">Sign In</h1>
        <div className="ButtonContainer">
            <button onClick={handleSignIn}>Sign In</button>
            <br />
            <br />
            <button onClick={() => navigate("/")} > back</button>
        </div>
    </div>);
}

export default SignIn;
