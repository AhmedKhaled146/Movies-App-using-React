import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";

function MyNavbar() {
  // const counter = useSelector((state) => state.counter.counter_val);
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
            <li className="nav-item">
              <NavLink
                to="/about-Us"
                className="nav-link"
                activeClassName="active-link"
              >
                AR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-Us"
                className="nav-link"
                activeClassName="active-link"
              >
                EN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
