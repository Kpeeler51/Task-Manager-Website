import React, {useState} from 'react'

export default function Dropdown({children}: {children: React.ReactNode}) {
    const [isOpen, setOpen] = useState(false);

    const toggleDropDown = () => {
        setOpen(!isOpen);
    }

  return (
    <div className="dropdown">
        <button onClick={toggleDropDown}>Dropdown</button>
        {isOpen && <div className = "dropdown-content">{children}</div>}
    </div>
  )
}
