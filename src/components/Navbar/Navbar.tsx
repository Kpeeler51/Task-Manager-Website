import {Link} from 'react-router'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link className="logo" to="/">TaskManager</Link>
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/tasks">Tasks</Link>
      <Link className="nav-item" to="/contact">Contact</Link>
    </nav>
  )
}
