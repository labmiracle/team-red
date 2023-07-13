import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoImage from '../../images/Logo.jpg';
import styles from './NavBar.module.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [containerLeft, setContainerLeft] = useState('-100%');
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setContainerLeft('0');
        } else {
            setContainerLeft('-50%');
        }
    };

    return (
        <nav className={styles.navBar}>
            <div>
                <img src={logoImage} alt='GymWebLogo' className={styles.logo} />
            </div>

            <button
                className={`${styles.menuIcon} ${
                    menuOpen ? styles.closeMenu : ''
                }`}
                onClick={handleToggleMenu}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div
                className={styles.containerItems}
                style={{ left: containerLeft }}
            >
                <div className={styles.item}>
                    <Link to='/'>Home</Link>
                </div>
                <div className={styles.item} style={{ left: containerLeft }}>
                    <ScrollLink
                        to='sobreNosotros'
                        smooth={true}
                        duration={500}
                        className={styles.link}
                    >
                        Sobre Nosotros
                    </ScrollLink>
                </div>
                <div className={styles.item} style={{ left: containerLeft }}>
                    <Link to='/contacto'>Contacto</Link>
                </div>
                <div className={styles.item} style={{ left: containerLeft }}>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    );
}
