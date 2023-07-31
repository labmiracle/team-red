import Schedule from '../Schedule/Schedule';

let loggeduser = 'UserName';

const UserPage: React.FC = () => {
    const events = [
        { id: 1, title: 'Yoga Class', time: '10:00 AM', trainer: 'John Doe' },
        { id: 2, title: 'Zumba Class', time: '2:00 PM', trainer: 'Jane Smith' },
    ];

    return (
        <div className='app'>
            <h1>Fitness Center Schedule</h1>
            <h1>{loggeduser}</h1>
            <Schedule events={events} />
        </div>
    );
};

export default UserPage;
