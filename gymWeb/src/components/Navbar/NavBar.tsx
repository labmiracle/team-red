import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoImage from '../../images/Logo.jpg';
import styles from './NavBar.module.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [itemLeft, setItemLeft] = useState('-200%');
    const [isMobile, setIsMobile] = useState(false);
    const [containerPosition, setContainerPosition] = useState<
        'absolute' | 'relative' | 'static'
    >('static');
    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.matchMedia(
                '(max-width: 1000px)'
            ).matches;
            setIsMobile(isMobileView);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        if (isMobile) {
            setContainerPosition('absolute');
        } else {
            setContainerPosition('static');
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setContainerPosition('relative');
            setItemLeft('0');
        } else {
            setContainerPosition('absolute');
            setItemLeft('-100%');
        }
    };

    return (
        <nav className={styles.navBar}>
            <div>
                <img src={logoImage} alt='GymWebLogo' className={styles.logo} />
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
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div
                className={styles.containerItems}
                style={{ position: containerPosition }}
            >
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
        </nav>
    );
}
