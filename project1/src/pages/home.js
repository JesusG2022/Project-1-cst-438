import Title from "../components/Title";
import Navbar from "../components/NarBar"

const Home = () => {
    return (
        <div className="Home">
            <Title />
            <Navbar />
            <h1 className="Title">Home Page</h1>
            <p className="TextAll">Welcome to the home page!</p>
        </div>
    );
}
 
export default Home;