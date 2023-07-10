import React from 'react';
import styles from './Home.module.css';

interface GridProps {
    items: Array<{ imageUrl: string; title: string }>;
}

const Home: React.FC<GridProps> = ({ items }) => {
    return (
        <div className={styles.gridcontainer}>
            {items.map((item, index) => (
                <div className={styles.griditem} key={index}>
                    <img
                        className={styles.griditemimg}
                        src={item.imageUrl}
                        alt={item.title}
                    />
                    <h3 className={styles.griditemh3}>{item.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Home;
