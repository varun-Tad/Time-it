import "./Herobutton.css";
const Herobutton = ({ text }) => {
  return (
    <div>
      <button className="hero-btn">{text}</button>
    </div>
  );
};

export default Herobutton;
