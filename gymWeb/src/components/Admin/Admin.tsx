import TableAdmin from '../TableAdmin/TableAdmin';
import styles from '../Admin/Admin.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

let loggeduser = 'Administrador';

interface User {
    id: number;
    name: string;
    lastname: string;
    state: number;
}

const Admin: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get<User[]>(
                'http://localhost:5000/api/users'
            );
            setUsers(response.data); // Actualizamos el estado con los datos obtenidos desde la API
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    return (
        <div className={styles.admin}>
            Bienvenido: {loggeduser}
            <TableAdmin users={users} />
        </div>
    );
};

export default Admin;
