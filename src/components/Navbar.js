import logo from '../assets/logo.svg'
import '../styles/Navbar.css'

function Navbar() {
    return <nav className='navbar'>
        <img id='navbar__logo' src={logo} alt="logo"/>
        <div>
            <ul className='navbar__buttons'>
                <li>Accueil</li>
                <li>A propos</li>
            </ul>
        </div>
    </nav>
}

export default Navbar