import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../context/language.js";
import "./navbar.css";
import { useContext } from "react";


function MyNavbar() {
  const { contextLang, setContextLang } = useContext(LanguageContext);

  const changeLanguage = (newLanguage) => {
    setContextLang(newLanguage);
  };
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr">
            {" "}
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {" "}
            <li className="nav-item">
              <NavLink
                to="/add-to-watch-list"
                className="nav-link"
                activeClassName="active-link"
              >
                Watchlist - {cart.watchlistCount}
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/to-ar"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => changeLanguage("ar")}
              >
                AR
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/to-en"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => changeLanguage("en")}
              >
                EN
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
