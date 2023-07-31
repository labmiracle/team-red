// components/Schedule.tsx
import React from 'react';
import { useState } from 'react';
import ScheduleItem from '../ScheduleItems/ScheduleItems';

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
            <div className='schedule'>
                {events.map(event => (
                    <ScheduleItem
                        id={event.id}
                        title={event.title}
                        time={event.time}
                        trainer={event.trainer}
                        onClick={onClick}
                    />
                ))}
            </div>
            <p>
                <div>
                    <h1>Tu lista de clases reservadas para este mes:</h1>
                    <h2
                        style={{
                            backgroundColor: 'white',
                        }}
                    >
                        {activities.join(', ')}
                    </h2>
                </div>
            </p>
        </>
    );
};

export default Schedule;
