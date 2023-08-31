import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Login.module.css';
import { AuthUser } from '../../interfaces/AuthUser.interface';

const apiHost = import.meta.env.VITE_API_HOST as string;
const apiPort = import.meta.env.VITE_API_PORT as string;
const apiUrlAuth = `http://${apiHost}:${apiPort}/api/auth/login`;

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authUser: AuthUser = { username: username, password: password };

    const handleSubmit = async () => {
        try {
            const response = await fetch(apiUrlAuth, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(authUser),
            });

            if (response.ok) {
                const data = await response.json();
                const jwtToken = data.token; // Assuming the token is returned as "token"

                // Store the JWT token in localStorage
                localStorage.setItem('jwtToken', jwtToken);

                console.log('Logueado exitosamente.');
            } else {
                console.error('Error al loguearse.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
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
