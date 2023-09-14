import React, { useState } from 'react';
import styles from './NewUserForm.module.css';
import { userServiceInstance } from '../../services/http/user/UserService';
import { IUser } from '../../interfaces/User.interface';

const NewUserForm: React.FC = () => {
    const [user, setUser] = useState<IUser>({
        id: 0,
        firstname: 'Nombre',
        lastname: 'Apellido',
        dni: 0,
        dateofbirth: '1990-01-01',
        phone: 0,
        email: 'email',
        address: 'Domicilio',
        city: 'Ciudad',
        state: 'Provincia',
        username: 'username',
        password: 'password',
        pay_date: '1990-01-01',
        role_id: 2,
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleNewUser = async () => {
        try {
            console.log(user);
            return await userServiceInstance.newUser(user);
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleNewUser();
    };

    return (
        <div>
            <button
                className={styles.formButton}
                onClick={() => setIsFormVisible(!isFormVisible)}
            >
                {isFormVisible ? 'Cerrar Formulario' : 'Crear Usuario'}
            </button>
            {isFormVisible && (
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <label htmlFor='firstname'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='firstname'
                        value={user.firstname}
                        onChange={handleChange}
                        placeholder='Nombre'
                        required
                    />
                    <label htmlFor='lastname'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='lastname'
                        value={user.lastname}
                        onChange={handleChange}
                        placeholder='Apellido'
                        required
                    />
                    <label htmlFor='dni'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='dni'
                        value={user.dni}
                        onChange={handleChange}
                        placeholder='DNI'
                        required
                    />
                    <label htmlFor='dateofbirth'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='dateofbirth'
                        value={user.dateofbirth}
                        onChange={handleChange}
                        placeholder='AAAA-MM-DD'
                        required
                    />
                    <label htmlFor='phone'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='phone'
                        value={user.phone}
                        onChange={handleChange}
                        placeholder='Teléfono'
                        required
                    />
                    <label htmlFor='email'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                        placeholder='email'
                        required
                    />
                    <label htmlFor='address'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='address'
                        value={user.address}
                        onChange={handleChange}
                        placeholder='Domicilio'
                        required
                    />
                    <label htmlFor='city'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='city'
                        value={user.city}
                        onChange={handleChange}
                        placeholder='Ciudad'
                        required
                    />

                    <label htmlFor='state'></label>
                    <input
                        id='state'
                        name='state'
                        value={user.state}
                        placeholder='Provincia'
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor='username'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='username'
                        value={user.username}
                        onChange={handleChange}
                        placeholder='Username'
                        required
                    />

                    <label htmlFor='password'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                        placeholder='Password'
                        required
                    />

                    <label htmlFor='pay_date'></label>
                    <input
                        id='pay_date'
                        name='pay_date'
                        value={user.pay_date}
                        placeholder='AAAA-MM-DD'
                        onChange={handleChange}
                        required
                    />

                    <div>
                        <button className={styles.formButton} type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default NewUserForm;
