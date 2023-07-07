import React, { useState } from 'react';
import styles from './Slider.module.css';

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
            <button onClick={previousSlide}>Previous</button>
            <img
                className={styles.sliderimage}
                src={images[currentIndex]}
                alt='Slider'
            />
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Slider;
