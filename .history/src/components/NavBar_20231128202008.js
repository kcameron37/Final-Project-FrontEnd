import React, { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [isCoreyPopupVisible, setIsCoreyPopupVisible] = useState(false);
  const [isKaitlynPopupVisible, setIsKaitlynPopupVisible] = useState(false);
  const [isGiovanaPopupVisible, setIsGiovanaPopupVisible] = useState(false);
  const [isSaraPopupVisible, setIsSaraPopupVisible] = useState(false);



  const toggleCoreyPopup = () => {
    setIsCoreyPopupVisible(!isCoreyPopupVisible);
  };

  const toggleKaitlynPopup = () => {
    setIsKaitlynPopupVisible(!isKaitlynPopupVisible);
  };

  const toggleGiovanaPopup = () => {
    setIsGiovanaPopupVisible(!isGiovanaPopupVisible);
  };

  const toggleSaraPopup = () => {
    setIsSaraPopupVisible(!isSaraPopupVisible);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
        <h2>JOB BOARD</h2>
      </div>

      <div>
        {/* Add Corey J. Rutt button */}
        <button onClick={toggleCoreyPopup}>Corey J. Rutt</button>
        {isCoreyPopupVisible && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={toggleCoreyPopup}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: A013347533</p>
            </div>
          </div>
        )}

        {/* Add Kaitlyn Cameron button */}
        <button onClick={toggleKaitlynPopup}>Kaitlyn Cameron</button>
        {isKaitlynPopupVisible && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={toggleKaitlynPopup}>
              X
            </button>
            <div className={styles.popup}>
            <p>Student Number: A</p>
            </div>
          </div>
        )}

        {/* Add Giovana Birck button */}
        <button onClick={toggleGiovanaPopup}>Giovana Birck</button>
        {isGiovanaPopupVisible && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={toggleGiovanaPopup}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: A</p>
            </div>
          </div>
        )}

        {/* Add Sara Shiojima button */}
        <button onClick={toggleSaraPopup}>Sara Shiojima</button>
        {isSaraPopupVisible && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={toggleSaraPopup}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: A01314209</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
