import { useNavigate } from "react-router-dom";
import Title from "../componets/Title";

const Start = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/SignIn");
    console.log("Sign In button clicked");
  };

  const handleSignUp = () => {
    navigate("/Signup");
    console.log("Sign Up button clicked");
  };

  return (
    <div className="Start">
      <Title />
      <button onClick={handleSignIn}>Sign In</button>
      <br />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Start;