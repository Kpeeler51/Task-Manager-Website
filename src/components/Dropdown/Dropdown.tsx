import React, { useState } from 'react';
import './Dropdown.css';
import upArrow from '../../assets/icons/iconup50.png';
import downArrow from '../../assets/icons/icondown50.png';

export default function Dropdown({children}: {children: React.ReactNode}) {
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                <img 
                    src={isOpen ? upArrow : downArrow} 
                    alt={isOpen ? "Close dropdown" : "Open dropdown"}
                    className="dropdown-icon"
                />
            </button>
            {isOpen && <div className="dropdown-content">{children}</div>}
        </div>
    )
}
