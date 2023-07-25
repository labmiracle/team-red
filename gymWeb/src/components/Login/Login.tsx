import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // lógica inicio de sesión 
        setUsername('');
        setPassword('');
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Usuario:</label>
                    <input
                        type='text'
                        id='username'
                        aria-label='Username'
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <p>
                Si no estás registrado y quieres hacerlo, haz
                <Link to='/register'> click aquí</Link>.
            </p>
        </div>
    );
};

export default Login;
