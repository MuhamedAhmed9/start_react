import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`${styles.about} py-5`}>
      <div className="container">
        <h2 className="header text-center">
          About
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </h2>
        <div className="row justify-content-center my-5 py-3">
          <div className="col-md-4">
            <p className="lead p-1">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-4">
            <p className="lead p-1">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
