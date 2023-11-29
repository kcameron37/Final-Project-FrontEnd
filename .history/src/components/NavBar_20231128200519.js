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
          // Step 1: Add a wrapper div for the popup
          <div className={styles.popupWrapper}>
            {/* Step 2: Use absolute positioning for the popup */}
            <div className={styles.popup}>
              <h3>Team Members</h3>
              <ul>
                <li>Kaitlyn</li>
                <li>Corey</li>
                <li>Giovana</li>
                <li>Sara</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
