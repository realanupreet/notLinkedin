import "./HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="HeaderOption__icon" />}
      {avatar && <img src={avatar} className="HeaderOption__icon" alt="me" />}
      <p>{title}</p>
    </div>
  );
};
export default HeaderOption;
