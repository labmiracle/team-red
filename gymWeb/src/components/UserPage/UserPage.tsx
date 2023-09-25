import Schedule from '../Schedule/Schedule';
import styles from './UserPage.module.css';
import { useState, useEffect } from 'react';
import { IUser } from '../../interfaces/User.interface';
import { useUser } from '../../context/userContext';
import { authServiceInstance } from '../../services/auth/AuthService';

const UserPage: React.FC = () => {
    const { userStatus } = useUser();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        if (userStatus) {
            authServiceInstance.auth().then(userData => {
                if (userData) {
                    setUser(userData);
                } else {
                    console.log('no hay user');
                }
            });
        }
    }, [userStatus]);

    const events = [
        { id: 1, title: 'Yoga', time: '10:00 AM', trainer: 'Adrián' },
        { id: 2, title: 'Zumba', time: '2:00 PM', trainer: 'Marcela' },
        { id: 3, title: 'Funcional', time: '6:00 PM', trainer: 'Darío' },
    ];

    const formatDate = (pay_date: string): string => {
        const fecha = new Date(pay_date);
        const fechaFormateada = fecha.toISOString().split('T')[0];
        return fechaFormateada;
    };

    const isUserActive = (pay_date: string): boolean => {
        const date = new Date(pay_date);
        date.setMonth(date.getMonth() + 1);
        const currentDate = new Date();
        return date.getTime() > currentDate.getTime();
    };

    return (
        <>
            <div className={styles.background}>
                <div className={styles.user}>
                    <div className={styles.greeting}>
                        <h1>
                            Hola {user?.firstname}! tu estado en GymWeb es:{' '}
                            {isUserActive(user?.pay_date)
                                ? 'Activo'
                                : 'Inactivo'}
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
                                    {user?.lastname}, {user?.firstname}
                                </td>
                                <td>{user?.dni}</td>
                                <td>{user?.dateofbirth}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.email}</td>
                                <td>{user?.address}</td>
                                <td>{user?.city}</td>
                                <td> {formatDate(user?.pay_date)}</td>
                                <td>
                                    {' '}
                                    {isUserActive(user?.pay_date)
                                        ? 'Activo'
                                        : 'Inactivo'}
                                </td>
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
