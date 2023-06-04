import "./style/style.css";
import MyPict from "./assets/profile/myPict.png";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <nav>
            <div className="wrapper">
              <div className="logo">
                <a href="/">
                  <p>CINEMA</p>
                </a>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <a href="#">GENRE</a>
                  </li>
                  <li>
                    <a href="#">POPULAR</a>
                  </li>
                </ul>
              </div>
              <div className="search">
                <input type="text" placeholder="Search..." id="search_input" />
              </div>
              <div className="img_profile">
                <a href="#">
                  <img src={MyPict} alt="" />
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="content"></div>
      </header>
    </div>
  );
};

export default App;
