import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;