import logoBlack from '../assets/logo-black.svg'
import '../styles/Footer.css'

function Footer() {
    return <footer>
        <img className='footer__logo' src={logoBlack} alt='black logo'/>
        <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </footer>
}

export default Footer