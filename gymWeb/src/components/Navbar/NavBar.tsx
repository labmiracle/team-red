import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useState } from 'react';

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <Link to='/'>GymWebLogo</Link>
            </div>
            <div className={styles.containerItems}>
                <div className={styles.item}>
                    <Link to='/'>Home</Link>
                </div>
                <div className={styles.item}>
                    <Link to='/contacto'>Contacto</Link>
                </div>
                <div className={styles.item}>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    );
}
