import React, { useState, useEffect, useRef } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [popups, setPopups] = useState({
    corey: false,
    kaitlyn: false,
    giovana: false,
    sara: false,
  });

  const togglePopup = (popupName) => {
    setPopups((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === popupName ? !prevState[key] : false;
        return acc;
      }, {}),
    }));
  };

  const popupRefs = {
    corey: useRef(null),
    kaitlyn: useRef(null),
    giovana: useRef(null),
    sara: useRef(null),
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      for (const key in popupRefs) {
        if (popupRefs[key].current && !popupRefs[key].current.contains(event.target)) {
          setPopups((prevState) => ({
            ...prevState,
            [key]: false,
          }));
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
        <h2>JOB BOARD</h2>
      </div>

      <div>
        <button onClick={() => togglePopup("corey")}>Corey J. Rutt</button>
        {popups.corey && (
          <div className={`${styles.popupWrapper} ${styles.corey}`} ref={popupRefs.corey}>
            <button className={styles.closeButton} onClick={() => togglePopup("corey")}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: A013347533</p>
            </div>
          </div>
        )}

        <button onClick={() => togglePopup("kaitlyn")}>Kaitlyn Cameron</button>
        {popups.kaitlyn && (
          <div className={`${styles.popupWrapper} ${styles.kaitlyn}`} ref={popupRefs.kaitlyn}>
            <button className={styles.closeButton} onClick={() => togglePopup("kaitlyn")}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: A01326523</p>
            </div>
          </div>
        )}

        <button onClick={() => togglePopup("giovana")}>Giovana Birck</button>
        {popups.giovana && (
          <div className={`${styles.popupWrapper} ${styles.giovana}`} ref={popupRefs.giovana}>
            <button className={styles.closeButton} onClick={() => togglePopup("giovana")}>
              X
            </button>
            <div className={styles.popup}>
              <p>Student Number: A01299565</p>
            </div>
          </div>
        )}

        <button onClick={() => togglePopup("sara")}>Sara Shiojima</button>
        {popups.sara && (
          <div className={`${styles.popupWrapper} ${styles.sara}`} ref={popupRefs.sara}>
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
