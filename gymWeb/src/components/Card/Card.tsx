import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className={styles.card}>
            <div>
                <h2>{title}</h2>
            </div>
            <div className={styles.cardcontent}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;
