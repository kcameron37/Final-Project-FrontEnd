import React, { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
        <h2>JOB BOARD</h2>
      </div>

      <div>
        <button onClick={togglePopup}>Team Members</button>
        {isPopupVisible && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={togglePopup}>
              X
            </button>
            <div className={styles.popup}>
              <ul>
                <li>Kaitlyn Cameron</li>
                <li>Corey Rutt</li>
                <li>Giovana Birck</li>
                <li>Sara Shiojima </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
