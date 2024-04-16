import { Link } from 'react-router-dom'
import { useUsuarioLogado } from '../../hooks/UseUsuarioLogado';
export const Dashboard = () => {

    const { nomeDoUsuario } = useUsuarioLogado();
    return (
        <div>
            <p>dashboard</p>
            <p>{nomeDoUsuario}</p>
            <p>{nomeDoUsuario}</p>

            <p>
                Ola, eu sou uma dashboard
                <Link to='/entrar'>Login</Link>
            </p>

        </div>
    );
}