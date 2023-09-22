import React, { useState } from 'react';
import styles from './TableAdmin.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import Register from '../Register/Register';
import { IUser } from '../../interfaces/User.interface';
import { userServiceInstance } from '../../services/http/user/UserService';

interface TableProps {
    users: IUser[];
}

const TableAdmin: React.FC<TableProps> = ({ users }) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [editMode, setEditMode] = useState<{ [userId: number]: boolean }>({});
    const [editedValues, setEditedValues] = useState<{
        [userId: number]: Partial<IUser>;
    }>({});

    async function handleDelete(userId: number) {
        return await userServiceInstance.delete(userId);
    }

    const toggleEditMode = (userId: number) => {
        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [userId]: !prevEditMode[userId],
        }));
    };
    const handleEditChange = (
        userId: number,
        field: keyof IUser,
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
            const editedUser = {
                id: userId,
                ...editedValues[userId],
            };

            console.log(editedUser);

            await userServiceInstance.edit(editedUser);

            setEditMode(prevEditMode => ({
                ...prevEditMode,
                [userId]: false,
            }));

            setEditedValues(prevEditedValues => ({
                ...prevEditedValues,
                [userId]: {},
            }));
        } catch (error) {
            console.error('Error:', error);
        }
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

    const filteredUsers = users.filter(user =>
        user.lastname.toUpperCase().startsWith(filterTerm)
    );
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

    const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const toggleRegister = () => {setIsRegisterVisible(!isRegisterVisible)};

    
    return (
        <>
            <div>
                <button type='submit' onClick={toggleRegister}>
                {isRegisterVisible ? 'Oculta Registrar Nuevo Usuario' : 'Muestra Registrar Nuevo Usuario'}
                </button>
                {isRegisterVisible && <Register isForAdmin={false} />}
                
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
                        <th>Fecha de pago</th>
                        <th>Estado</th>

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
                                                editedValues[user.id]
                                                    ?.firstname ??
                                                user.firstname
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'firstname',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]
                                                    ?.lastname ?? user.lastname
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'lastname',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${user.lastname}, ${user.firstname}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='number'
                                            value={
                                                editedValues[user.id]?.dni ??
                                                user.dni
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'dni',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${user.dni}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]
                                                    ?.dateofbirth ??
                                                user.dateofbirth
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'dateofbirth',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${formatDate(user.dateofbirth)}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]?.phone ??
                                                user.phone
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'phone',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${user.phone}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]?.email ??
                                                user.email
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'email',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${user.email}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]
                                                    ?.address ?? user.address
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'address',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${user.address}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]?.city ??
                                                user.city
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'city',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${user.city}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {editMode[user.id] ? (
                                    <>
                                        <input
                                            type='text'
                                            value={
                                                editedValues[user.id]
                                                    ?.pay_date ?? user.pay_date
                                            }
                                            onChange={e =>
                                                handleEditChange(
                                                    user.id,
                                                    'pay_date',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    `${formatDate(user.pay_date)}`
                                )}
                            </td>
                            <td>
                                {' '}
                                {isUserActive(user.pay_date)
                                    ? 'Activo'
                                    : 'Inactivo'}
                            </td>

                            <td>
                                {editMode[user.id] ? (
                                    <>
                                        <button
                                            onClick={() => saveEdit(user.id)}
                                        >
                                            Guardar
                                        </button>
                                        <button
                                            onClick={() => cancelEdit(user.id)}
                                        >
                                            Cancelar
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

                                <DeleteButton
                                    onClick={handleDelete}
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
