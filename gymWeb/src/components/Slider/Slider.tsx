import React, { useState } from 'react';
import styles from './Slider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.slidercontainer}>
            <button onClick={previousSlide}>
                {' '}
                <FontAwesomeIcon
                    icon={faCircleLeft}
                    style={{ color: '#5a5a5a' }}
                />
            </button>
            <img
                className={styles.sliderimage}
                src={images[currentIndex]}
                alt='Slider'
            />
            <button onClick={nextSlide}>
                <FontAwesomeIcon
                    icon={faCircleRight}
                    style={{ color: '#5a5a5a' }}
                />
            </button>
        </div>
    );
};

export default Slider;
