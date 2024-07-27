import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

function Profile(props) {
  return (
    <div className="profile__content">
      <SideBar />
      <ClothesSection array={props.array} />
    </div>
  );
}

export default Profile;
