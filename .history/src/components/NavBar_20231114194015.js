import React from 'react';
import styles from './navBar.module.css'; // Import the CSS module

export default function NavBar() {
    return (
        <div className={styles.navBar}> {/* Use styles object to refer to your class */}
            <img src="/images/logo.svg" alt="Logo" />
            <h2>JOB BOARD</h2>
            <div>
                <button>Corey Rutt</button>
                <button>Giovana Birck</button>
                <button>Sara Shiojima</button>
                <button>Kaitlyn Cameron</button>
            </div>
        </div>
    );
}
