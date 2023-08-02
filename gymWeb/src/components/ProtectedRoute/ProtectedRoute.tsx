// export default function ProtectedRoute({ children }) {
//     return children;
// }
import { useState } from 'react';
interface User {
    id: number;
    name: string;
}
const [user, setUser] = useState<User | null>(null);
const login = () => {
    //request TODO
    setUser({
        id: 0,
        name: 'María',
    });
};
const logout = () => setUser(null);
{
    user ? (
        <button onClick={logout}>Logout</button>
    ) : (
        <button onClick={login}>Login</button>
    );
}
