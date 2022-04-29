import Herobutton from "../Components/Herobutton";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <h1 className="hero-heading">Time It. </h1>
      <div className="hero-center">
        <h2 className="hero-para">It's about Time !</h2>
        <Herobutton text={"Jump In!"} />
      </div>

      <div className="side"></div>
    </div>
  );
};

export default Homepage;
