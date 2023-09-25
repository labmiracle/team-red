import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Login.module.css';
import { IAuthUser } from '../../interfaces/User.interface';
import { loginServiceInstance } from '../../services/http/login/LoginService';
import { useUser } from '../../context/userContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useUser();
    const authUser: IAuthUser = { username: username, password: password };

    const handleSubmit = async () => {
        loginServiceInstance.login(authUser);
        login();
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form className={styles.loginForm}>
                <div>
                    <label htmlFor='username'>Usuario:</label>
                    <input
                        type='text'
                        id='username'
                        aria-label='Username'
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña:</label>
                    <input
                        type='password'
                        id='password'
                        aria-label='Password'
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Link to='/'>
                    <p className={styles.loginSubmit} onClick={handleSubmit}>
                        Login
                    </p>
                </Link>
            </form>

            <p>
                Si no estás registrado y quieres hacerlo, haz
                <Link className={styles.register} to='/register'>
                    {' '}
                    click aquí
                </Link>
                .
            </p>
        </div>
    );
}

export default Login;
