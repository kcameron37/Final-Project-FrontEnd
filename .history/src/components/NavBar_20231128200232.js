import React from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
        <h2>JOB BOARD</h2>
      </div>

      <div>
        <button>Salary</button>
      </div>
    </div>
  );
}
