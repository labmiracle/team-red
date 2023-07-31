import Schedule from '../Schedule/Schedule';
import styles from './UserPage.module.css';

let user = { name: 'Juan', lastName: 'Perez', status: 'Cuota la día' };

const UserPage: React.FC = () => {
    const events = [
        { id: 1, title: 'Yoga', time: '10:00 AM', trainer: 'Adriáne' },
        { id: 2, title: 'Zumba', time: '2:00 PM', trainer: 'Marcela' },
        { id: 3, title: 'Funcional', time: '6:00 PM', trainer: 'Darío' },
    ];

    return (
        <>
            <div className={styles.body}>
                <h1>
                    Hola {user.name}! tu estado en GymWeb es: {user.status}
                </h1>
                <h1>Gymweb Schedule</h1>
                <Schedule events={events} />
            </div>
        </>
    );
};

export default UserPage;
