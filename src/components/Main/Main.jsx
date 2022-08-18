import React from "react";
import logo from "./logo.svg";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={`${styles.main}`}>
      <div className="main-content text-center">
        <img src={logo} alt="logo" />
        <h1 className="header light text-center">
          START REACT
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </h1>
        <h4 className="mt-5 text-white py-2">
          Graphic Artist - Web Designer - Illustrator
        </h4>
      </div>
    </div>
  );
}
