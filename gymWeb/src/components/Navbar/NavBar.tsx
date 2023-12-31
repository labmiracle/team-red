import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import styles from './NavBar.module.css';
import { useUser } from '../../context/userContext';
import { loginServiceInstance } from '../../services/http/login/LoginService';

export default function NavBar() {
    const { userStatus, logout } = useUser();
    const [menuOpen, setMenuOpen] = useState(true);
    const [itemLeft, setItemLeft] = useState('-300%');

    useEffect(() => {
        if (userStatus === true) {
            setMenuOpen(false);
            setItemLeft('-200%');
        } else {
            setMenuOpen(true);
            setItemLeft('-300%');
        }
    }, [userStatus]);

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
        logout();
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
                    {loginServiceInstance.isAuthenticated() === false ? (
                        <div className={styles.item} style={{ left: itemLeft }}>
                            <Link to='/login'>Login</Link>
                        </div>
                    ) : (
                        <>
                            <div>
                                {loginServiceInstance.isAuthorizedTo()
                                    ?.role_id === 1 ? (
                                    <Link
                                        className={styles.itemMiespacio}
                                        style={{ left: itemLeft }}
                                        to='/admin'
                                    >
                                        Mi Espacio
                                    </Link>
                                ) : (
                                    <Link
                                        className={styles.itemMiespacio}
                                        style={{ left: itemLeft }}
                                        to='/user'
                                    >
                                        Mi Espacio
                                    </Link>
                                )}
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
