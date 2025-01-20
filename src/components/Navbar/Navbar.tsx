import {Link} from 'react-router'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Tasks</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
