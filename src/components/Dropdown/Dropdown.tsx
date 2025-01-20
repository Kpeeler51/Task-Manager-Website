import React, {useState} from 'react'

export default function Dropdown({children}: {children: React.ReactNode}) {
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!isOpen);
    }

  return (
    <div className="dropdown">
        <button onClick={toggleDropdown}>Dropdown</button>
        {isOpen && <div className = "dropdown-content">{children}</div>}
    </div>
  )
}
