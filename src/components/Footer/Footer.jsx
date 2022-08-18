import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item text-center">
                <h4>LOCATION</h4>
                <p className="lead">2215 John Daniel Drive Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item text-center">
                <h4>AROUND THE WEB</h4>
                <ul className="list-unstyled mt-5">
                  <li>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item text-center">
                <h4>ABOUT FREELANCER</h4>
                <p className="lead">
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-dark text-white">
        <div className="copyright">
          <div className="container pt-3">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="lead fw-bolder">Copyright © Your Website 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
