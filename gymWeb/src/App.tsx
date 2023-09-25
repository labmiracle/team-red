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
import { useUser } from './context/userContext';

function App() {
    const { userStatus } = useUser();
    const userPermission = loginServiceInstance.isAuthorizedTo();

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />

                    <Route
                        path='/register'
                        element={<Register isForAdmin={false} />}
                    />
                    <Route path='/contacto' element={<Contacto />} />

                    {userStatus && userPermission?.role_id === 1 ? (
                        <>
                            <Route
                                path='/admin'
                                element={<Admin users={[]} />}
                            />
                        </>
                    ) : userStatus && userPermission?.role_id === 2 ? (
                        <>
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
