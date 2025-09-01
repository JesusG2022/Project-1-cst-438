import Title from "../componets/Title";
import Navbar from "../componets/NarBar"

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