import React from 'react';
import '../styles.css'; // Adjust the path if your styles.css is in a different directory

export default function NavBar() {
    return (
        <div className="navBar">
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
