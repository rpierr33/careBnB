import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src={logo}
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;