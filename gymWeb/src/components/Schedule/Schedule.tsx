// components/Schedule.tsx
import React from 'react';
import { useState } from 'react';
import ScheduleItem from '../ScheduleItems/ScheduleItems';
import styles from './Schedule.module.css';

interface ScheduleProps {
    events: Event[];
}

interface Event {
    id: number;
    title: string;
    time: string;
    trainer: string;
}

const Schedule: React.FC<ScheduleProps> = ({ events }) => {
    const [activities, setActivities] = useState<string[]>([]);

    function onClick(activity: string) {
        const isActivityRepeated = activities.includes(activity);
        if (!isActivityRepeated) {
            setActivities(prevActivities => [...prevActivities, activity]);
        } else {
            setActivities(prevActivities =>
                prevActivities.filter(item => item !== activity)
            );
        }
    }

    return (
        <>
            <div className={styles.schedule}>
                <table className={styles.scheduletable}>
                    <tr>
                        <th>Actividad</th>
                        <th>Horario</th>
                        <th>Instructor</th>
                    </tr>

                    {events.map(event => (
                        <ScheduleItem
                            id={event.id}
                            title={event.title}
                            time={event.time}
                            trainer={event.trainer}
                            onClick={onClick}
                        />
                    ))}
                </table>
            </div>
            <p>
                <div>
                    <h1>Tus clases reservadas para este mes:</h1>
                    <h2>{activities.join(', ')}</h2>
                </div>
            </p>
        </>
    );
};

export default Schedule;
