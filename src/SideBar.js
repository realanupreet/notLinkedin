import "./SideBar.css";
import FaceIcon from "@mui/icons-material/Face";
const SideBar = () => {
  const recentItem = (topic) => (
    <div className="SideBar__recentItem">
      <span className="SideBar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <aside className="SideBar">
      <div className="SideBar__upperHalf">
        <div className="SideBar__top">
          <div className="SideBar__BGimg"></div>
          <div className="SideBar__BGimgAfter">
            <FaceIcon />
            <h2>Focused Shaw</h2>
            <h4>intern at switch</h4>
          </div>
        </div>

        <div className="SideBar__stats">
          <div className="SideBar__stat">
            <p>Who viewed your profile</p>
            <p className="SideBar__statNumber">+7855</p>
          </div>
          <div className="SideBar__stat">
            <p>Views on your posts</p>
            <p className="SideBar__statNumber">+3555</p>
          </div>
        </div>
      </div>
      <div className="SideBar__bottom">
        <p className="SideBar__recent">Recent</p>
        {recentItem("design")}
        {recentItem("software")}
        {recentItem("developer")}
        {recentItem("placement")}
        {recentItem("programming")}
      </div>
    </aside>
  );
};
export default SideBar;
