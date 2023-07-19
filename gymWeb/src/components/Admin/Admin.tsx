import TableAdmin from '../TableAdmin/TableAdmin';
import styles from '../Admin/Admin.module.css';

let loggeduser = 'Administrador';
//tomar el nombre de la sesión o la db para la página de usuario logueado.

const users = [
    {
        id: 0,
        name: 'juan',
        lastname: 'perez',
        dni: 12345678,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 1,
        name: 'ana',
        lastname: 'gómez',
        dni: 12345678,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 2,
        name: 'fffff',
        lastname: 'ccccc',
        dni: 1111111,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 3,
        name: 'hhhhhh',
        lastname: 'kkkkkkk',
        dni: 2222222,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'antocomisso@gmail.com',
        status: 'active',
    },
    {
        id: 4,
        name: 'sssssss',
        lastname: 'ddddddd',
        dni: 333333,
        dateofbirth: '12/01/1990',
        phonenumber: 12121212,
        email: 'antocomisso@gmail.com',
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
