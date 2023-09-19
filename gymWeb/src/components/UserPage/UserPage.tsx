import Schedule from '../Schedule/Schedule';
import styles from './UserPage.module.css';
import { userServiceInstance } from '../../services/http/user/UserService';
import { loginServiceInstance } from '../../services/http/login/LoginService';
import { useState, useEffect } from 'react';

import { IUser } from '../../interfaces/User.interface';

//let user = {
//  name: 'JuanJuan',
//  lastName: 'Perez',
//  dni: 12345678,
//  status: 'Cuota la día',
//};

const UserPage: React.FC = () => {
    const [user, setUser] = useState<IUser>({
        id: 0,
        firstname: '',
        lastname: '',
        dni: 0,
        dateofbirth: '',
        phone: 0,
        email: '',
        address: '',
        city: '',
        state: '',
        username: '',
        password: '',
        pay_date: '',
        role_id: 2,
    });

    useEffect(() => {
        async function fetchUser() {
            const userId = loginServiceInstance.isAuthorizedTo()?.userId;
            if (userId) {
                const user = await userServiceInstance.getbyId(userId);
                setUser(user);
            } else {
                setUser(user);
            }
        }
        fetchUser();
    }, []);

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
                            {user.pay_date}
                        </h1>
                    </div>
                    <table className={styles.usertable}>
                        <thead className={styles.thead}>
                            <tr>
                                <th>Año</th>
                                <th>Apellido y nombre</th>
                                <th>DNI</th>
                                <th>Mes de cuota</th>
                                <th>Vto. cuota</th>
                                <th>Valor Cuota</th>
                                <th>Pago cuota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>
                                    {user.lastname}, {user?.firstname}
                                </td>
                                <td>{user.dni}</td>
                                <td>AGOSTO</td>
                                <td>15/08/2023</td>
                                <td>$7000</td>
                                <td>{user.pay_date}</td>
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
