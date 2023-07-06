import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faPhone,
    faHouse,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footercol}>
                        <h4>Menu</h4>
                        <ul>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href='#'>About us</a>
                            </li>
                            <li>
                                <a href='#'>Register</a>
                            </li>
                            <li>
                                <a href='#'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>Get help</h4>
                        <ul>
                            <li>
                                <a href='#'>FAQ</a>
                            </li>
                            <li>
                                <a href='https://autogestion.produccion.gob.ar/consumidores'>
                                    Consumer Protection
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>Contact us</h4>
                        <ul>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={faEnvelope} /> {'  '}
                                    info@gym.com
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={faPhone} /> {'  '}
                                    (341) 456-7890
                                </a>
                            </li>
                            <li>
                                <a>
                                    {' '}
                                    <FontAwesomeIcon icon={faHouse} />
                                    {'  '}
                                    Rosario (ARG)
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>Follow us</h4>

                        <a href='https://www.facebook.com/'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href='https://www.twitter.com/'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href='https://www.instagram.com/'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
