import React from 'react';
import './TableAdmin.module.css';

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
        <table className='user-table'>
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
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        {/* Add more table cells based on the user object properties */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableAdmin;
