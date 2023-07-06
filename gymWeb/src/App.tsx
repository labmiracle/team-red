import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Contacto from './components/Contacto';
function App() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Contacto' element={<Contacto />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
