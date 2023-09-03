import React from 'react';
import { IUser } from '../../interfaces/User.interface';

interface TableAdminProps {
    users: IUser[];
}

const TableAdmin: React.FC<TableAdminProps> = ({ users }) => {
    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                            {/* Add more table data cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableAdmin;
