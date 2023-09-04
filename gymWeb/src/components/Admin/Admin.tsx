import TableAdmin from '../TableAdmin/TableAdmin';
import styles from '../Admin/Admin.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from '../../interfaces/User.interface';
let loggeduser = 'Administrador';

const Admin: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const apiHost = import.meta.env.VITE_API_HOST as string;
    const apiPort = import.meta.env.VITE_API_PORT as string;
    const apiUrlUsers = `http://${apiHost}:${apiPort}/api/users`;

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get<User[]>(apiUrlUsers);
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    return (
        <>
            <div className={styles.admin}>
                Bienvenido: {loggeduser}
                <TableAdmin users={users} />
            </div>
        </>
    );
};

export default Admin;
