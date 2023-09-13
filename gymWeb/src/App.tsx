import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import Contacto from './components/Contacto/Contacto';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import UserPage from './components/UserPage/UserPage';
import { loginServiceInstance } from './services/http/login/LoginService';

function App() {
    const userStatus = loginServiceInstance.isAuthenticated();

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/contacto' element={<Contacto />} />

                    {userStatus ? (
                        <>
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/user' element={<UserPage />} />
                        </>
                    ) : (
                        <>
                            <Route
                                path='/admin'
                                element={<Navigate to='/login' />}
                            />
                            <Route
                                path='/user'
                                element={<Navigate to='/login' />}
                            />
                        </>
                    )}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
