// Importa las bibliotecas necesarias
import React, { useContext } from 'react';
import { Route, redirect, RouteProps } from 'react-router-dom';

const AuthContext = React.createContext<boolean>(false);

// Componente de protección de rutas
const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const isAuthenticated = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ "/admin" }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};


