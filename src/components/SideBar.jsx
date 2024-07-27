import "../blocks/SideBar.css";
import avatar from "../assets/avatar.png";

function SideBar(props) {
  return (
    <div className="sidebar__content">
      <div className="sidebar__profile-container">
        <img
          src={avatar}
          alt="Avatar Picture"
          className="sidebar__profile-avatar"
        />
        <p className="sidebar__profile-name">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
