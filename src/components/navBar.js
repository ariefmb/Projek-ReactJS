import MyPict from "../assets/profile/myPict.png";
import Search from "../search";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <a href="/"><p>CINEMA</p></a>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">GENRE</a></li>
            <li><a href="#popular">POPULAR</a></li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." id="search_input"
          onChange={(target) => Search(target.value)} />
        </div>
        <div className="img_profile">
          <a href="#"><img src={MyPict} alt="" /></a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
