import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import Contacto from './components/Contacto/Contacto';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';

const images = [
    './src/images/slider_images/image1_v2.jpg',
    './src/images/slider_images/image2_slider.jpg',
    './src/images/slider_images/image3_slider.png',
    './src/images/slider_images/image4_slider.jpg',
    './src/images/slider_images/image7_slider.jpeg',
];

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Slider images={images} />
                <Routes>
                    <Route path='/' element={<Home />} />
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
