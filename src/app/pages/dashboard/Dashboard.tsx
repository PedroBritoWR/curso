import { Link } from 'react-router-dom'


export const Dashboard = () => {
    return (
        <div>
        <p>
            Ola, eu sou uma dashboard
            <Link to='/entrar'>Login</Link>
        </p>
        
        </div>
    );
}