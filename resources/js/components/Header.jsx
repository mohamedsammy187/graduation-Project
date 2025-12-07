import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className='app-header container'>
      <ul className='nav-links'>
        <NavLink to="/"><li>
          <span>COOK</span>WHAT<span>U</span>HAVE
        </li></NavLink>
        <NavLink to="/Home"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
      </ul>
    </header>
  )
}

export default Header