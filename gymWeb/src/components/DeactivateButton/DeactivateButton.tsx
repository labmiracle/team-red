import React from 'react';
import styles from '../DeactivateButton/DeactivateButton.module.css';

interface DeactivateButtonProps {
    onClick: (userId: number) => void;
    userId: number;
}

const DeactivateButton: React.FC<DeactivateButtonProps> = ({
    onClick,
    userId,
}) => {
    const handleDeactivateClick = () => {
        onClick(userId);
    };

    return (
        <button
            className={styles.buttondeactivate}
            type='button'
            onClick={handleDeactivateClick}
        >
            Desactivar
        </button>
    );
};

export default DeactivateButton;
