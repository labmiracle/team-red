import React from 'react';
import styles from './TableAdmin.module.css';

interface User {
    id: number;
    name: string;
    lastname: string;
    dni: number;
    email: string;
    status: string;
}

interface TableProps {
    users: User[];
}

const TableAdmin: React.FC<TableProps> = ({ users }) => {
    return (
        <table className={styles.usertable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                    <th>Email</th>
                    <th>Estado de Cuota</th>
                    {/* Add more table headers as per your requirements */}
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.dni}</td>
                        <td>{user.email}</td>
                        <td>{user.status}</td>
                        {/* Add more table cells based on the user object properties */}
                        <td>
                            <button className={styles.button}>eliminar</button>{' '}
                            <button className={styles.button}>editar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableAdmin;
