import TableAdmin from '../TableAdmin/TableAdmin';
import styles from '../Admin/Admin.module.css';

let loggeduser = 'Administrador';
//tomar el nombre de la sesión o la db para la página de usuario logueado.

const users = [
    {
        id: 0,
        name: 'María',
        lastname: 'Perez',
        dni: 12345678,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'sssssso@gmail.com',
        status: 'active',
    },
    {
        id: 1,
        name: 'Ana',
        lastname: 'Gómez',
        dni: 12345678,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'aaaaao@gmail.com',
        status: 'active',
    },
    {
        id: 2,
        name: 'Fernando',
        lastname: 'Correa',
        dni: 1111111,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'aaaa@gmail.com',
        status: 'active',
    },
    {
        id: 3,
        name: 'Lionel',
        lastname: 'Messi',
        dni: 2222222,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'aaaa@gmail.com',
        status: 'active',
    },
    {
        id: 4,
        name: 'Sergio',
        lastname: 'Busquets',
        dni: 333333,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'aaaaa@gmail.com',
        status: 'active',
    },
];

const Admin: React.FC = () => {
    return (
        <div className={styles.admin}>
            Bienvenido: {loggeduser}
            <TableAdmin users={users} />
        </div>
    );
};

export default Admin;
