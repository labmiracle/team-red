import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Slider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const messages = [
        'DESAFIÁ TUS LÍMITES',
        'UN GIMNASIO HECHO A TU MEDIDA',
        'ALCANZÁ TU MÁXIMO RENDIMIENTO',
        'CLASES PERSONALIZADAS',
    ];
    const [currentMessage, setCurrentMessage] = useState(messages[0]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setCurrentMessage(messages[currentIndex]);
    };
    const previousSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setCurrentMessage(messages[currentIndex]);
    };

    return (
        <div className={styles.slidercontainer}>
            <img
                className={styles.sliderimage}
                src={images[currentIndex]}
                alt='Slider'
            />

            <p className={styles.slidertext}>{currentMessage}</p>

            <Link to='/Register'>
                {' '}
                <button className={styles.sliderbutton}>CONOCÉ MÁS</button>
            </Link>

            <div className={styles.sliderarrows}>
                <div className={styles.leftarrow} onClick={previousSlide}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        style={{ color: ' #97FB57' }}
                    />
                </div>
                <div className={styles.rightarrow} onClick={nextSlide}>
                    {' '}
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: ' #97FB57' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Slider;
