import TableAdmin from '../TableAdmin/TableAdmin';
import styles from '../Admin/Admin.module.css';
const users = [
    {
        id: 0,
        name: 'juan',
        lastname: 'perez',
        dni: 12345678,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 1,
        name: 'ana',
        lastname: 'gómez',
        dni: 12345678,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 2,
        name: 'fffff',
        lastname: 'ccccc',
        dni: 1111111,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 3,
        name: 'hhhhhh',
        lastname: 'kkkkkkk',
        dni: 2222222,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 4,
        name: 'sssssss',
        lastname: 'ddddddd',
        dni: 333333,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
];

const Admin: React.FC = () => {
    return (
        <div className={styles.admin}>
            Bienvenido: Administrador
            <TableAdmin users={users} />;
        </div>
    );
};

export default Admin;
