import React, { useState } from 'react';
import styles from './NewUserForm.module.css';

const apiHost = import.meta.env.VITE_API_HOST as string;
const apiPort = import.meta.env.VITE_API_PORT as string;
const apiUrlUsers = `http://${apiHost}:${apiPort}/api/users`;

interface User {
    id: number;
    name: string;
    lastname: string;
    dni: number;
    dateofbirth: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: number;
}

const NewUserForm: React.FC = () => {
    const [user, setUser] = useState<User>({
        name: '',
        lastname: '',
        dni: '',
        dateofbirth: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: 1,
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleNewUser = async () => {
        try {
            const response = await fetch(apiUrlUsers, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Elemento creado exitosamente.');
            } else {
                console.error('Error al crear el elemento.');
            }
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
                    <label htmlFor='name'></label>
                    <input
                        className={styles.userInput}
                        type='text'
                        name='name'
                        value={user.name}
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
                        placeholder='DD/MM/AAAA'
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
                    <label htmlFor='stateSelect'></label>
                    <select
                        id='state'
                        name='state'
                        value={user.state}
                        onChange={e =>
                            setUser({ ...user, state: Number(e.target.value) })
                        }
                        required
                    >
                        <option value={0}>INACTIVO</option>
                        <option value={1}>ACTIVO</option>
                    </select>
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
