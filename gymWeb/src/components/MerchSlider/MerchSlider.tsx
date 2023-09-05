import React, { useState, useEffect } from 'react';
import styles from './MerchSlider.module.css';

interface SliderProps {
    images: string[];
}

const MerchSlider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <section id='sobreNosotros' className={styles.slidercontainer}>
            <img
                className={styles.sliderimage}
                src={images[currentIndex]}
                alt='MerchSlider'
            />
            <h2 className={styles.h2}>Sobre nosotros</h2>
            <p className={styles.text}>
                Somos Federico Lopumo, Tamara Grunseid, Gastón Falena y Antonela
                Comisso a.k.a. Team Red de la segunda edición de MiracleLab
                2023. En este trabajo final hemos desarrollado el front y el
                backend de una página web pensada para un gimnasio ficticio
                llamado GYMWEB.{' '}
            </p>
        </section>
    );
};

export default MerchSlider;
