import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className={`${styles["bg-dark"]} navbar navbar-expand-lg position-fixed top-0 left-0 w-100`}
      >
        <div className="container">
          <Link className={`${styles.brand} nav-link`} to="/">
            Start React
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
