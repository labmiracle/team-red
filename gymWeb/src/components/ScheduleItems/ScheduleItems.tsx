import React from 'react';

interface ScheduleItemProps {
    id: number;
    title: string;
    time: string;
    trainer: string;
}
const ScheduleItem: React.FC<ScheduleItemProps> = props => {
    const { id, title, time, trainer } = props;

    return (
        <div>
            {id}
            {title}
            {time}
            {trainer}{' '}
        </div>
    );
};

export default ScheduleItem;
