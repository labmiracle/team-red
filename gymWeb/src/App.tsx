import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import Contacto from './components/Contacto/Contacto';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';

const images = [
    './src/images/slider_images/image1_slider.jpg',
    './src/images/slider_images/image2_slider.jpg',
    './src/images/slider_images/image3_slider.jpg',
    './src/images/slider_images/image4_slider.jpg',
];

const items = [
    {
        imageUrl: './src/images/slider_images/image1_slider.jpg',
        title: 'Fitness',
    },
    {
        imageUrl: './src/images/slider_images/image2_slider.jpg',
        title: 'Musculación',
    },
    {
        imageUrl: './src/images/slider_images/image3_slider.jpg',
        title: 'Funcional',
    },
    // Add more items as needed
];

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Slider images={images} />
                <Routes>
                    <Route path='/' element={<Home items={items} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
