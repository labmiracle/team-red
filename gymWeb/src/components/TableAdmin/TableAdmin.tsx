import React, { useState } from 'react';
import styles from './TableAdmin.module.css';

interface User {
    id: number;
    name: string;
    lastname: string;
    dni: number;
    dateofbirth: string;
    phonenumber: number;
    email: string;
    status: string;
}

interface TableProps {
    users: User[];
}

const TableAdmin: React.FC<TableProps> = ({ users }) => {
    const [filterTerm, setFilterTerm] = useState('');

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTerm(event.target.value.toUpperCase());
    };

    const filteredUsers = filterTerm
        ? users.filter(user => user.name.toUpperCase().startsWith(filterTerm))
        : users;
    return (
        <>
            <div className={styles.filter}>
                Filtrar por nombre:{' '}
                <input
                    className={styles.filterinput}
                    type='text'
                    placeholder='Filtrar por nombre'
                    value={filterTerm}
                    onChange={handleFilterChange}
                />
            </div>

            <table className={styles.usertable}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Fecha de Nac.</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Estado de Cuota</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                {user.name} {user.lastname}
                            </td>
                            <td>{user.dni}</td>
                            <td>{user.dateofbirth}</td>
                            <td>{user.phonenumber}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td>
                                <button className={styles.buttondelete}>
                                    Eliminar
                                </button>{' '}
                                <button className={styles.buttonedit}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TableAdmin;
