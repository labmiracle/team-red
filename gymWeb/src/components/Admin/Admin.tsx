import styles from '../Admin/Admin.module.css';
import { useState, useEffect } from 'react';

import { IUser } from '../../interfaces/User.interface';
import { userServiceInstance } from '../../services/http/user/UserService';
import TableAdmin from '../TableAdmin/TableAdmin';

let loggeduser = 'Administrador';

function Admin() {
    const [users, setUsers] = useState<IUser[]>([]);
                  

    useEffect(() => {
        async function fetchUsers() {
            const users = await userServiceInstance.getAll();
            setUsers(users);
        }
        fetchUsers();
    }, []);

    return (
        <>
            <div className={styles.admin}>
                Bienvenido: {loggeduser}
                <TableAdmin users={users} />
            </div>
        </>
    );
}
export default Admin;
