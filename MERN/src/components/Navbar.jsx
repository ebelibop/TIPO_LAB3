import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__mark">TIPO</span>
        <span className="navbar__title">Student Directory</span>
      </div>

      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/students" className="navbar__link">
          Students
        </Link>
        <Link to="/teacher" className="navbar__link">
          Teachers
        </Link>
      </div>
    </nav>
  )
}

export default Navbar