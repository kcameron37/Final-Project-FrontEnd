import React, { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  // Step 2: Create a state variable to manage the popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Step 3: Define a function to toggle the popup's visibility
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
        {/* Step 4: Render the button and the popup */}
        <button onClick={togglePopup}>Team Members</button>
        {isPopupVisible && (
          <div className={styles.popup}>
            <h3>Team Members</h3>
            <ul>
              <li>Kaitlyn</li>
              <li>Corey</li>
              <li>Giovana</li>
              <li>Sara</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
