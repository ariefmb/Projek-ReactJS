import MyPict from "../../assets/profile/myPict.jpg";
import instagram from "../../assets/sosmed/instagram.png";
import whatsapp from "../../assets/sosmed/whatsapp.png";
import github from "../../assets/sosmed/github.png";
import NotFound from "../../pages/notFound";

const LeftComp = () => {
  return (
    <div className="left-content">
      <div className="img-profile">
        <img src={MyPict} alt="profile" />
        <h1>ARIEFMB</h1>
      </div>
      <div className="sosmed">
        <ul>
          <li>
            <a href="https://instagram.com/ariefmuh._" target="_blank">
              <img src={instagram} alt="" />
              <h3>ariefmuh._</h3>
            </a>
          </li>
          <li>
            <a href=<NotFound /> target="_blank">
              <img src={whatsapp} alt="" />
              <h3>0856xxxx</h3>
            </a>
          </li>
          <li>
            <a href="https://github.com/ariefmb" target="_blank">
              <img src={github} alt="" />
              <h3>ariefmb</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftComp;
