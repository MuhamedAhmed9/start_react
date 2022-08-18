import React, { useEffect } from "react";
import styles from "./Portfolio.module.css";
import img1 from "./imgs/cabin.png";
import img2 from "./imgs/cake.png";
import img3 from "./imgs/circus.png";
import img4 from "./imgs/game.png";
import img5 from "./imgs/safe.png";
import img6 from "./imgs/submarine.png";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

export default function Portfolio() {
  let imgsArr = [img1, img2, img3, img4, img5, img6];
  let imgClick = (src) => {
    let popup = document.querySelector(".popup");
    popup.querySelector("img").src = src;
    popup.classList.replace("d-none", "d-flex");
    document.body.style.overflow = "hidden";
  };
  let closePopup = () => {
    let popup = document.querySelector(".popup");
    popup.classList.replace("d-flex", "d-none");
    document.body.style.overflow = "auto";
  };
  return (
    <div className="portfolio py-5">
      {/* start popup */}
      <div
        className={`${styles.portfolioLayer} popup position-fixed top-0 start-0 end-0 bottom-0 py-5 min-vh-100 d-none align-items-center justify-content-center overflow-auto`}
      >
        <div className="popUpContent w-75 text-center my-5 p-5 bg-dark">
          <h2 className="header mb-5">
            TASTY CAKE
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </h2>
          <img
            src={img1}
            alt="TASTY CAKE"
            className="w-50 mt-5 mb-3 rounded rounded-3 d-block mx-auto"
          />
          <p className="text-white w-75 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
            inventore quisquam velit asperiores, vitae? Reprehenderit soluta,
            eos quod consequuntur itaque. Nam.
          </p>
          <button onClick={closePopup} className="btn btn-primary">
            Close Window
          </button>
        </div>
      </div>
      {/* end popup */}
      <h2 className="header text-center">
        portfolio
        <span>
          <i className="fa-solid fa-star"></i>
        </span>
      </h2>
      <div className="container my-5">
        <div className={`${styles["portfolio-items"]} row gy-2`}>
          {imgsArr.map((img, index) => (
            <PortfolioItem key={index} src={img} display={imgClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
