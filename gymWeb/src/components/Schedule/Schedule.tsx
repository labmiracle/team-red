// components/Schedule.tsx
import React from 'react';
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
    return (
        <div className='schedule'>
            {events.map(event => (
                <ScheduleItem
                    id={event.id}
                    title={event.title}
                    time={event.time}
                    trainer={event.trainer}
                />
            ))}
        </div>
    );
};

export default Schedule;
