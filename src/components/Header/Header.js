import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [close, setClose] = useState(false);
  const handleDropdown = () => {
    let target = document.getElementById("nav-link");
    console.log(target.style.top);
    if (target.style.top === "" || target.style.top === "-100%") {
      target.style.visibility = "visible";
      target.style.top = "80px";
      setClose(!close);
    } else {
      target.style.visibility = "hidden";
      target.style.top = "-100%";
      setClose(!close);
    }
    console.log(target.style.top);
  };
  return (
    <nav className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="dropdown-menu">
        <button onClick={handleDropdown}>
          {close ? (
            <FontAwesomeIcon className="close-icon" icon={faClose}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon className="menu-icon" icon={faBars}></FontAwesomeIcon>
          )}
        </button>
      </div>
      <div id="nav-link" className="nav-link">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Header;
