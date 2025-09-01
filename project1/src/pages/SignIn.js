import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        console.log("Sign In button clicked");
        navigate("/home");
    };

    return (
        <div className="SignIn">
            <h1 className="Title">Sign In</h1>
            <div className="ButtonContainer">
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <button onClick={handleSignIn}>Sign In</button>
                <br />
                <br />
                <button onClick={() => navigate("/")}>Back</button>
            </div>
        </div>
    );
};

export default SignIn;