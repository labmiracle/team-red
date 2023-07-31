import React from 'react';
import styles from '../DeleteButton/DeleteButton.module.css';

interface DeleteButtonProps {
    onClick: (userId: number) => void;
    userId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, userId }) => {
    const handleDeleteClick = () => {
        onClick(userId);
    };

    return (
        <button
            className={styles.buttondelete}
            type='button'
            onClick={handleDeleteClick}
        >
            Delete
        </button>
    );
};

export default DeleteButton;
