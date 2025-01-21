import React, { useState } from 'react'
import './Dropdown.css'

export default function Dropdown({children}: {children: React.ReactNode}) {
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                {isOpen ? '▲' : '▼'}
            </button>
            {isOpen && <div className="dropdown-content">{children}</div>}
        </div>
    )
}
