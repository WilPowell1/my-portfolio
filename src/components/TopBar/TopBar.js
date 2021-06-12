import React from "react";
import "./topbar.css";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

const TopBar = ({ menuOpen, setMenuOpen }) => {

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Wil Powell
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <h4>07710226471</h4>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <h4>powellwil88@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;