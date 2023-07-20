import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoImage from '../../images/Logo.jpg';
import styles from './NavBar.module.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [itemLeft, setItemLeft] = useState('-300%');
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setItemLeft('0');
        } else {
            setItemLeft('-200%');
        }
    };

    return (
        <nav className={styles.navBar}>
            <div>
                <Link to='/'>
                    <img
                        src={logoImage}
                        alt='GymWebLogo'
                        className={styles.logo}
                    />
                </Link>
            </div>

            <button
                className={`${styles.menuIcon} ${
                    menuOpen ? styles.closeMenu : ''
                }`}
                onClick={handleToggleMenu}
            >
                {menuOpen ? <FaBars /> : <FaTimes />}
            </button>
            <div className={` ${menuOpen ? styles.responsive : ''}`}>
                <div className={styles.containerItems}>
                    <div className={styles.item} style={{ left: itemLeft }}>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className={styles.item} style={{ left: itemLeft }}>
                        <ScrollLink
                            to='sobreNosotros'
                            smooth={true}
                            duration={500}
                            className={styles.link}
                        >
                            Sobre Nosotros
                        </ScrollLink>
                    </div>
                    <div className={styles.item} style={{ left: itemLeft }}>
                        <Link to='/contacto'>Contacto</Link>
                    </div>
                    <div className={styles.item} style={{ left: itemLeft }}>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
