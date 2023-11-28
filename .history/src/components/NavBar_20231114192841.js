import React from 'react';

export default function NavBar() {
    return (
        <div>
            <h2>JOB BOARD</h2>
            {/* Notice how we reference the SVG from the public directory */}
            <img src="/images/logo.png" alt="Logo" />
        </div>
    );
}
