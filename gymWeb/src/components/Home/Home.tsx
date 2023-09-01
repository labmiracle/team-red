import Grid from '../Grid/Grid';
import Slider from '../Slider/Slider';
import MerchSlider from '../MerchSlider/MerchSlider';

const images = [
    '/images/slider_images/image3_slider.jpg',
    '/images/slider_images/image4_slider.jpg',
    '/images/slider_images/image1_slider.jpg',
    '/images/slider_images/image2_slider.jpg',
];

const imagesMerch = [
    '/images/merch_images/RemeraNegra_logo.PNG',
    '/images/merch_images/Celu_logo.PNG',
    '/images/merch_images/Remera_logo.PNG',
    '/images/merch_images/Cartel_logo.PNG',
];

const items = [
    {
        imageUrl: '/images/cards_images/fitness.jpg',
        title: 'Fitness',
        content:
            'Todos los beneficios de ejercitar con poco peso y al máximo de tus posibilidades. ',
    },
    {
        imageUrl: '/images/cards_images/musculacion.jpg',
        title: 'Musculación',
        content:
            'Nuestro equipo de profesionales desarrolla rutinas adaptadas a tus necesidades.',
    },
    {
        imageUrl: '/images/cards_images/funcional.jpg',
        title: 'Funcional',
        content:
            'Consutlá nuestros horarios disponibles todos los días de la semana.',
    },
];
const Home = () => {
    return (
        <>
            <Slider images={images} />
            <Grid items={items} />
            <MerchSlider images={imagesMerch} />
        </>
    );
};

export default Home;
