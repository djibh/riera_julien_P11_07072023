import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/Navbar.css'

function Navbar() {
    return <header>
        <nav className='navbar'>
            <img id='navbar__logo' src={logo} alt="logo"/>
            <div>
                <ul className='navbar__buttons'>
                    <li>
                        <NavLink to="/">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}

export default Navbar