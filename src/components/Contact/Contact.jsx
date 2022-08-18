import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  function validateInput(e) {
    e.preventDefault();
    let userName = document.getElementById("name");
    let userEmail = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");
    // let submit = document.getElementById("submit");
    //validation
    let name_regexp = /\w{3,}/;
    let email_regexp = /\w{3,}@\w+\.\w+/;
    let phone_regexp = /^(002 ?)?01[0125]\d{8}$/;
    let message_regexp = /\w{3,}/;
    if (userName) {
      if (name_regexp.test(userName.value)) {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
      } else {
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        // userName.nextElementSibling.style.setProperty("display", "block");
      }
    }
    if (userEmail) {
      if (email_regexp.test(userEmail.value)) {
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
      } else {
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
      }
    }
    if (phone) {
      if (phone_regexp.test(phone.value)) {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
      } else {
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
      }
    }
    if (message) {
      if (message_regexp.test(message.value)) {
        message.classList.add("is-valid");
        message.classList.remove("is-invalid");
      } else {
        message.classList.add("is-invalid");
        message.classList.remove("is-valid");
      }
    }
  }

  return (
    <div className="container py-5">
      <h2 className="header text-center mb-5">
        Contact Me
        <span>
          <i className="fa-solid fa-star"></i>
        </span>
      </h2>
      <div className="row py-5">
        <form action="">
          <div className="form-group">
            <label className={styles["d-none"]} htmlFor="name">
              Name
            </label>
            <input
              className="form-control px-3 py-2 mb-3"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label className={styles["d-none"]} htmlFor="email">
              Email
            </label>
            <input
              className="form-control px-3 py-2 mb-3"
              type="text"
              id="email"
              placeholder="Email Address"
            />
          </div>

          <div className="form-group">
            <label className={styles["d-none"]} htmlFor="phone">
              Phone Number
            </label>
            <input
              className="form-control px-3 py-2 mb-3"
              type="text"
              id="phone"
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group">
            <label className={styles["d-none"]} htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control px-3 py-2 mb-3"
              name=""
              id="message"
              placeholder="Message"
            ></textarea>
          </div>

          <button
            onClick={(e) => validateInput(e)}
            id="submit"
            className="btn btn-primary p-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
