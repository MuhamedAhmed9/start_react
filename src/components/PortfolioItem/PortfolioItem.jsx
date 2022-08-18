import React from "react";
import styles from "./PortofolioItem.module.css";

export default function PortfolioItem(props) {
  return (
    <div className="col-md-4 p-3">
      <div
        className={`${styles.item} rounded rounded-4 overflow-hidden position-relative`}
        onClick={() => props.display(props.src)}
      >
        <img src={props.src} alt="img" className="w-100 d-block" />
        <div
          className={`${styles.layer} position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center `}
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
}
