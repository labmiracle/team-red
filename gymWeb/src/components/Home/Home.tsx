import Grid from '../Grid/Grid';
import Slider from '../Slider/Slider';

const images = [
    './src/images/slider_images/image3_slider.jpg',
    './src/images/slider_images/image4_slider.jpg',
    './src/images/slider_images/image1_slider.jpg',
    './src/images/slider_images/image2_slider.jpg',
];

const items = [
    {
        imageUrl: './src/images/cards_images/fitness.jpg',
        title: 'Fitness',
        content:
            'Todos los beneficios the ejercitar con poco peso y al máximo de tus posibilidades. ',
    },
    {
        imageUrl: './src/images/cards_images/musculacion.jpg',
        title: 'Musculación',
        content:
            'Creá tus rutinas y ajustadas a tus necesidades, junto a nuestro equipo de profesionales.',
    },
    {
        imageUrl: './src/images/cards_images/funcional.jpg',
        title: 'Funcional',
        content:
            'Consutlá por los horarios disponibles todos los días de la semana.',
    },
];
const Home = () => {
    return (
        <>
            <Slider images={images} />
            <Grid items={items} />
        </>
    );
};

export default Home;
