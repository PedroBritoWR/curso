import { Link } from 'react-router-dom'
import { useUsuarioLogado } from '../../hooks/UseUsuarioLogado';
export const Dashboard = () => {

    const { nomeDoUsuario, logout } = useUsuarioLogado();
    return (
        <div>
            <p>dashboard</p>
            <p>{nomeDoUsuario}</p>
            <p>
                Ola, eu sou uma dashboard
                <Link to='/entrar'>Login</Link>
            </p>

            <button onClick={logout}>Logout</button>

        </div>
    );
}