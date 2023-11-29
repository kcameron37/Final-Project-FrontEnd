import React, { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [popupVisible, setPopupVisible] = useState({
    team: false,
    corey: false,
    kaitlyn: false,
    giovana: false,
    sara: false,
  });

  const togglePopup = (popupName) => {
    setPopupVisible({
      ...popupVisible,
      [popupName]: !popupVisible[popupName],
    });
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
        <h2>JOB BOARD</h2>
      </div>

      <div>
        <button onClick={() => togglePopup("team")}>Team Members</button>
        {popupVisible.team && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={() => togglePopup("team")}>
              X
            </button>
            <div className={styles.popup}>
              <ul>
                <li onClick={() => togglePopup("kaitlyn")}>Kaitlyn Cameron</li>
                <li onClick={() => togglePopup("corey")}>Corey Rutt</li>
                <li onClick={() => togglePopup("giovana")}>Giovana Birck</li>
                <li onClick={() => togglePopup("sara")}>Sara Shiojima – A01314209</li>
              </ul>
            </div>
          </div>
        )}
        {/* Add Corey J. Rutt button */}
        {popupVisible.corey && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={() => togglePopup("corey")}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: [Corey's Student Number]</p>
            </div>
          </div>
        )}

        {/* Add Kaitlyn Cameron button */}
        {popupVisible.kaitlyn && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={() => togglePopup("kaitlyn")}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: [Kaitlyn's Student Number]</p>
            </div>
          </div>
        )}

        {/* Add Giovana Birck button */}
        {popupVisible.giovana && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={() => togglePopup("giovana")}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: [Giovana's Student Number]</p>
            </div>
          </div>
        )}

        {/* Add Sara Shiojima button */}
        {popupVisible.sara && (
          <div className={styles.popupWrapper}>
            <button className={styles.closeButton} onClick={() => togglePopup("sara")}>
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
