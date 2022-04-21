import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="divofdoom">
      <header className="Header">
        <div className="Header__left">
          <div className="Header__icon">
            <LinkedInIcon />
          </div>
          <div className="Header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="Header__right">
          <HeaderOption Icon={SearchIcon} title="search" />
          <HeaderOption Icon={HomeIcon} title="Home" />
          {/* <HeaderOption Icon={PeopleAltIcon} title="My Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={MessageIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */}
          <HeaderOption
            avatar="https://raw.githubusercontent.com/realanupreet/realanupreet/main/avatar.jpg"
            title="me"
          />
        </div>
      </header>
    </div>
  );
};
export default Header;
