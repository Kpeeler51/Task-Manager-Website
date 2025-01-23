import React, { useState } from 'react';
import './Dropdown.css';
import upArrow from '../../assets/icons/iconup50.png';
import downArrow from '../../assets/icons/icondown50.png';

// Dropdown component. Input props: children is element displayed in dropdown
export default function Dropdown({children}: {children: React.ReactNode}) {
    // State for dropdown open/closed status. Default is closed.
    const [isOpen, setOpen] = useState(false);

// Function to toggle dropdown open/closed status.
    const toggleDropdown = () => {
        setOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            {/* Button calls toggleDropdown to open/close the dropdown. */}
            <button onClick={toggleDropdown} className="dropdown-toggle">
                {/* Up/Down arrow toggled based on open/closed state. */}
                <img 
                    src={isOpen ? upArrow : downArrow} 
                    alt={isOpen ? "Close dropdown" : "Open dropdown"}
                    className="dropdown-icon"
                />
            </button>
            {/* If dropdown is open, it displays children content. */}
            {isOpen && <div className="dropdown-content">{children}</div>}
        </div>
    )
}
