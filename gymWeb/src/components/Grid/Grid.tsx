import React from 'react';
import styles from './Grid.module.css';
import Card from '../Card/Card';

interface GridProps {
    items: Array<{ imageUrl: string; title: string; content: string }>;
}

const Grid: React.FC<GridProps> = ({ items }) => {
    return (
        <>
            <div className={styles.gridcontainer}>
                {items.map((item, index) => (
                    <div className={styles.griditem} key={index}>
                        <img
                            className={styles.griditemimg}
                            src={item.imageUrl}
                            alt={item.title}
                        />

                        <Card title={item.title} content={item.content} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Grid;
