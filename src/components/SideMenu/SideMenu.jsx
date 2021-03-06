import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function SideMenuItem({ path, linkText, icon }) {
  const location = useLocation();

  return (
    <li
      className={
        location.pathname === path
          ? "side-menu-item side-menu-item--selected"
          : "side-menu-item"
      }
    >
      <Link to={path}>
        <span className="side-menu-item-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        {linkText}
      </Link>
    </li>
  );
}

SideMenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.shape(
    PropTypes.shape({
      icon: PropTypes.arrayOf(PropTypes.array),
      iconName: PropTypes.string,
      prefix: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const SideMenu = ({ open }) => {
  const { t } = useTranslation();

  return (
    <div className={open ? "side-menu show" : "side-menu"}>
      <ul>
        <SideMenuItem path="/" linkText={t("Home")} icon={faHome} />
        <SideMenuItem
          path="/place-tubes"
          linkText={t("Place conduit")}
          icon={faProjectDiagram}
        />
        <SideMenuItem
          path="/work-task"
          linkText={t("Work tasks")}
          icon={faTasks}
        />
      </ul>
    </div>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default SideMenu;
