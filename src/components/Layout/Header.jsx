import { NavLink } from 'react-router-dom'
import logo from '../../styles/img/logo-kasa.svg'

const Header = () => {
    return(
        <header className='header'>
            <div className='header_logo'>
                <img src={logo} alt='kasa-logo' className='header_logo_img' />
            </div>
            <nav className='header_nav'>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link_active' : 'header_nav_link')}
                            title='Accueil'
                            end to='/home'
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link_active' : 'header_nav_link')}
                            title='Accueil'
                            end to='/about'
                        >
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header