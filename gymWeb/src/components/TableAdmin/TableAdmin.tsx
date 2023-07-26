import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TableAdmin.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';

interface User {
    id: number;
    name: string;
    lastname: string;
    state: number;
}

interface TableProps {
    users: User[];
}

const TableAdmin: React.FC<TableProps> = ({ users }) => {
    const [filterTerm, setFilterTerm] = useState('');

    const handleDelete = async (userId: number) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/users/${userId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.ok) {
                console.log('Elemento eliminado exitosamente.');
            } else {
                console.error('Error al eliminar el elemento.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTerm(event.target.value.toUpperCase());
    };

    const filteredUsers = filterTerm
        ? users.filter(user =>
              user.lastname.toUpperCase().startsWith(filterTerm)
          )
        : users;
    return (
        <>
            <div className={styles.filter}>
                Filtrar por apellido:{' '}
                <input
                    className={styles.filterinput}
                    type='text'
                    placeholder='Filtrar por apellido'
                    value={filterTerm}
                    onChange={handleFilterChange}
                />
            </div>

            <table className={styles.usertable}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Apellido y Nombre</th>
                        <th>Estado de Cuota</th>
                        <button className={styles.buttonregister}>
                            {' '}
                            <Link
                                className={styles.buttonregister}
                                to='/register'
                            >
                                Nuevo Usuario
                            </Link>
                        </button>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                {user.lastname}, {user.name}
                            </td>

                            <td>{user.state}</td>
                            <td>
                                <button className={styles.buttonedit}>
                                    Editar
                                </button>{' '}
                                <DeleteButton
                                    onClick={handleDelete}
                                    userId={user.id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TableAdmin;
