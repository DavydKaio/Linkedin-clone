import "./HeaderOption.css";

import { Avatar } from "@mui/material";

// eslint-disable-next-line react/prop-types
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOPtion__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
