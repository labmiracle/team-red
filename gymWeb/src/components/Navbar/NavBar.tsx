import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import styles from './NavBar.module.css';
//import { loginServiceInstance } from '../../services/http/login/LoginService';
import { useUser } from '../../context/userContext';
import { loginServiceInstance } from '../../services/http/login/LoginService';

export default function NavBar() {
    const { userStatus } = useUser();
    console.log('estado en navbar', userStatus);
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

    const handleLogOut = () => {
        loginServiceInstance.logout();
    };

    return (
        <nav className={styles.navBar}>
            <div className={styles.containerLogo}>
                <Link to='/'>
                    <img
                        src='/images/Logo.jpg'
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
                    {userStatus === false ? (
                        <div className={styles.item} style={{ left: itemLeft }}>
                            <Link to='/login'>Login</Link>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Link
                                    className={styles.miespacio}
                                    to='/miespacio'
                                >
                                    Mi Espacio
                                </Link>
                            </div>
                            <div
                                className={styles.item}
                                style={{ left: itemLeft }}
                            >
                                <Link to='/'>
                                    <p
                                        style={{ color: 'red' }}
                                        onClick={handleLogOut}
                                    >
                                        LogOut
                                    </p>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
