import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TableAdmin.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';

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

interface TableProps {
    users: User[];
}

const TableAdmin: React.FC<TableProps> = ({ users }) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filterState, setFilterState] = useState('');

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

    const handleStateFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilterState(event.target.value);
    };

    const filteredUsers = users.filter(
        user =>
            user.lastname.toUpperCase().startsWith(filterTerm) &&
            (filterState === '' || user.state.toString() === filterState)
    );

    return (
        <>
            {' '}
            <button className={styles.buttonregister}>
                {' '}
                <Link className={styles.buttonregister} to='/register'>
                    Crear nuevo usuario
                </Link>
            </button>
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
                        <th>Apellido y nombre</th>
                        <th>DNI</th>
                        <th>Fecha de nac.</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Domicilio</th>
                        <th>Ciudad</th>
                        <th>
                            {' '}
                            Estado en el Gym{' '}
                            <select
                                className={styles.select}
                                value={filterState}
                                onChange={handleStateFilterChange}
                            >
                                <option value=''>Todos</option>
                                <option value='1'>Activos</option>
                                <option value='0'>Inactivos</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                {user.lastname}, {user.name}
                            </td>
                            <td>{user.dni}</td>
                            <td>{user.dateofbirth}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state === 1 ? 'ACTIVO' : 'INACTIVO'}</td>
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
