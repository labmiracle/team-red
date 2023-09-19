import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { UserProvider } from './context/userContext.tsx';

ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>,
    document.getElementById('root')
);
