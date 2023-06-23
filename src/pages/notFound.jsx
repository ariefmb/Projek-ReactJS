import "../style/notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="text">
        <h1>OOPS!</h1>
        <h2>NOT FOUND!</h2>
      </div>
      <div className="back">
        <Link to="/">
          <button id="main">MAIN</button>
        </Link>
        <Link to="/profile">
          <button id="profile">PROFILE</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
