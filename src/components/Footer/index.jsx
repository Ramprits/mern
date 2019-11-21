import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>Saint Gobain</h5>
            <p className={styles.description}>
              This is placeholder text. Your web app description goes here.
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/">
                  Contact
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  About
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
