import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { name: "Account", path: "Account", icon: "fas fa-user-circle" },
    { name: "Dashboard", path: "Dashboard", icon: "fas fa-tachometer-alt" },
    { name: "Courses", path: "Courses", icon: "fas fa-book" },
    { name: "Calendar", path: "Calendar", icon: "fas fa-calendar-alt" },
    { name: "Inbox", path: "Inbox", icon: "fas fa-envelope" },
    { name: "History", path: "History", icon: "far fa-clock" },
    { name: "Studio", path: "Studio", icon: "fas fa-network-wired" },
    { name: "Commons", path: "Commons", icon: "fas fa-share-square" },
    { name: "Help", path: "Help", icon: "fas fa-question-circle" },
  ];

  return (
    <div className="sidebar">
      <link
        href="../vendors/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link href="../vendors/fontawesome/css/all.css" rel="stylesheet" />
      <img src="../images/Northeastern Logo.png" alt="nLogo" height="80" width="80" />
      {links.map((link, index) => (
        <label key={index} htmlFor="sidebarToggle">
          <Link
            to={`/Kanbas/${link.path}`}
            className={pathname.includes(link.path) ? "active" : ""}
          >
            <i
              className={`${link.icon} ${
                link.name === "Account"
                  ? pathname.includes(link.path)
                    ? "icon-red"
                    : "icon-white"
                  : "icon-red"
              }`}
            ></i>
            <br />
            {link.name}
          </Link>
        </label>
      ))}
    </div>
  );
}

export default KanbasNavigation;