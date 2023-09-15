import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';

interface UserContextType {
    userStatus: boolean;
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
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            setUserStatus(true);
        } else {
            setUserStatus(false);
        }
    }, []);

    const login = () => {
        setUserStatus(true);
    };

    const logout = () => {
        setUserStatus(false);
    };

    return (
        <UserContext.Provider value={{ userStatus, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
