import React from 'react';
import styles from './navBar.module.css';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <div>
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
