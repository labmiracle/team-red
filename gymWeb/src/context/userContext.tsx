import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';
import { loginServiceInstance } from '../services/http/login/LoginService';

interface UserContextType {
    userStatus: boolean;
    setUserStatus: (status: boolean) => void;
    login: () => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [userStatus, setUserStatus] = useState(false);

    useEffect(() => {
        setUserStatus(loginServiceInstance.isAuthenticated());
    }, []);

    const login = () => {
        setUserStatus(!loginServiceInstance.isAuthenticated());
    };

    const logout = () => {
        setUserStatus(loginServiceInstance.isAuthenticated());
    };

    return (
        <UserContext.Provider
            value={{ userStatus, setUserStatus, login, logout }}
        >
            {children}
        </UserContext.Provider>
    );
}
