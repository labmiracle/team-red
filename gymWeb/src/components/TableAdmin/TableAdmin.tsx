import React, { useState } from 'react';
import styles from './TableAdmin.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import NewUserForm from '../NewUserButton/NewUserForm';
import DeactivateButton from '../DeactivateButton/DeactivateButton';

interface User {
    id: number;
    name: string;
    lastname: string;
    dni: number;
    dateofbirth: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: number;
}

interface TableProps {
    users: User[];
}

const TableAdmin: React.FC<TableProps> = ({ users }) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filterState, setFilterState] = useState('');
    const [editMode, setEditMode] = useState<{ [userId: number]: boolean }>({});
    const [editedValues, setEditedValues] = useState<{
        [userId: number]: Partial<User>;
    }>({});

    const apiHost = import.meta.env.VITE_API_HOST as string;
    const apiPort = import.meta.env.VITE_API_PORT as string;
    const apiUrlUsers = `http://${apiHost}:${apiPort}/api/users`;

    const handleDelete = async (userId: number) => {
        try {
            const response = await fetch(`${apiUrlUsers}/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Elemento eliminado exitosamente.');
            } else {
                console.error('Error al eliminar el elemento.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const handleDeactivate = async (userId: number) => {
        try {
            const response = await fetch(`${apiUrlUsers}/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Elemento modificado exitosamente.');
            } else {
                console.error('Error al modificar el elemento.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    const toggleEditMode = (userId: number) => {
        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [userId]: !prevEditMode[userId],
        }));
    };
    const handleEditChange = (
        userId: number,
        field: keyof User,
        value: string
    ) => {
        setEditedValues(prevEditedValues => ({
            ...prevEditedValues,
            [userId]: {
                ...prevEditedValues[userId],
                [field]: value,
            },
        }));
    };
    const saveEdit = async (userId: number) => {
        try {
            const response = await fetch(`${apiUrlUsers}/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Elemento modificado exitosamente.');
            } else {
                console.error('Error al modificar el elemento.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [userId]: false,
        }));
        setEditedValues(prevEditedValues => ({
            ...prevEditedValues,
            [userId]: {},
        }));
    };

    const cancelEdit = (userId: number) => {
        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [userId]: false,
        }));
        setEditedValues(prevEditedValues => ({
            ...prevEditedValues,
            [userId]: {},
        }));
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTerm(event.target.value.toUpperCase());
    };

    const handleStateFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilterState(event.target.value);
    };

    const filteredUsers = users.filter(
        user =>
            user.lastname.toUpperCase().startsWith(filterTerm) &&
            (filterState === '' || user.state.toString() === filterState)
    );

    return (
        <>
            <div>
                {' '}
                <NewUserForm />{' '}
            </div>{' '}
            <div className={styles.filter}>
                Filtrar por apellido:{' '}
                <input
                    className={styles.filterinput}
                    type='text'
                    placeholder='Filtrar por apellido'
                    value={filterTerm}
                    onChange={handleFilterChange}
                />
            </div>
            <table className={styles.usertable}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Apellido y nombre</th>
                        <th>DNI</th>
                        <th>Fecha de nac.</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Domicilio</th>
                        <th>Ciudad</th>
                        <th>
                            {' '}
                            Estado en el Gym{' '}
                            <select
                                className={styles.select}
                                value={filterState}
                                onChange={handleStateFilterChange}
                            >
                                <option value=''>Todos</option>
                                <option value='1'>Activos</option>
                                <option value='0'>Inactivos</option>
                            </select>
                        </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]?.name ??
                                                user.name
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'name',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {/* Add similar input fields for other editable fields */}
                                    </>
                                ) : (
                                    `${user.lastname}, ${user.name}`
                                )}
                            </td>
                            <td>{user.dni}</td>
                            <td>{user.dateofbirth}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state === 1 ? 'ACTIVO' : 'INACTIVO'}</td>
                            <td>
                                {editMode[user.id] ? (
                                    <>
                                        <button
                                            onClick={() => saveEdit(user.id)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => cancelEdit(user.id)}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className={styles.buttonedit}
                                        onClick={() => toggleEditMode(user.id)}
                                    >
                                        Editar
                                    </button>
                                )}
                                {/* ... */}

                                <DeleteButton
                                    onClick={handleDelete}
                                    userId={user.id}
                                />
                                <DeactivateButton
                                    onClick={handleDeactivate}
                                    userId={user.id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TableAdmin;
