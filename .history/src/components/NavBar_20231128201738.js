import React, { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [isTeamPopupVisible, setIsTeamPopupVisible] = useState(false);
  const [isCoreyPopupVisible, setIsCoreyPopupVisible] = useState(false);
  const [isKaitlynPopupVisible, setIsKaitlynPopupVisible] = useState(false);
  const [isGiovanaPopupVisible, setIsGiovanaPopupVisible] = useState(false);
  const [isSaraPopupVisible, setIsSaraPopupVisible] = useState(false);

  const toggleTeamPopup = () => {
    setIsTeamPopupVisible(!isTeamPopupVisible);
  };

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
        <button onClick={toggleTeamPopup}>Team Members</button>
        {isTeamPopupVisible && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={toggleTeamPopup}>
              X
            </button>
            <div className={styles.popup}>
              <ul>
                <li>Kaitlyn Cameron</li>
                <li>Corey Rutt</li>
                <li>Giovana Birck</li>
                <li>Sara Shiojima – A01314209</li>
              </ul>
            </div>
          </div>
        )}
        {/* Add Corey J. Rutt button */}
        <button onClick={toggleCoreyPopup}>Corey J. Rutt</button>
        {isCoreyPopupVisible && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={toggleCoreyPopup}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: [Corey's Student Number]</p>
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
              <p>Student Number: [Kaitlyn's Student Number]</p>
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
              <p>Student Number: [Giovana's Student Number]</p>
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
