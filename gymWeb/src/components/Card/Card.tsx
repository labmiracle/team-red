import React, { useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.cardexpanded} onClick={toggleCard}>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {' '}
                {isExpanded && (
                    <div className={styles.cardcontent}>
                        <p>{content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
