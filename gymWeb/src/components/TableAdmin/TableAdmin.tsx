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
                                {user.lastname}, {user.name}
                            </td>
                            <td>{user.dni}</td>
                            <td>{user.dateofbirth}</td>
                            <td>{user.phonenumber}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td>
                                <button className={styles.buttonedit}>
                                    Editar
                                </button>{' '}
                                <button className={styles.buttondelete}>
                                    Eliminar
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
