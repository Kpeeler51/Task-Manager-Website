import {Link} from 'react-router';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">TaskManager</Link>
      <div className="nav-links">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/tasks">Tasks</Link>
        <Link className="nav-item" to="/contact">Contact</Link>
      </div>
    </nav>
  )
}