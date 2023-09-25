import Schedule from '../Schedule/Schedule';
import styles from './UserPage.module.css';

let user = {
    firstname: 'Pato',
    lastName: 'Donald',
    dni: 22222222,
    status: 'Activo',
    dateofbirth: '1972-06-18',
    phone: '2232232323',
    email: 'patodonald@gmail.com',
    address: 'rosario 2345',
    city: 'rosario',
    pay_date: '2023-09-25',
};

const UserPage: React.FC = () => {
    const events = [
        { id: 1, title: 'Yoga', time: '10:00 AM', trainer: 'Adrián' },
        { id: 2, title: 'Zumba', time: '2:00 PM', trainer: 'Marcela' },
        { id: 3, title: 'Funcional', time: '6:00 PM', trainer: 'Darío' },
    ];

    return (
        <>
            <div className={styles.background}>
                <div className={styles.user}>
                    <div className={styles.greeting}>
                        <h1>
                            Hola {user.firstname}! tu estado en GymWeb es:{' '}
                            {user.status}
                        </h1>
                    </div>
                    <table className={styles.usertable}>
                        <thead className={styles.thead}>
                            <tr>
                                <th>Año</th>
                                <th>Apellido y nombre</th>
                                <th>DNI</th>
                                <th>Fecha de nac.</th>
                                <th>Teléfono</th>
                                <th>Email</th>
                                <th>Domicilio</th>
                                <th>Ciudad</th>
                                <th>Fecha de pago</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>
                                    {user.lastName}, {user.firstname}
                                </td>
                                <td>{user.dni}</td>
                                <td>{user.dateofbirth}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.pay_date}</td>
                                <td>{user.status}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.schedule}>
                        <h1>Gymweb Schedule</h1>
                        <Schedule events={events} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;
