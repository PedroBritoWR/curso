import { useState } from "react"
import { useNavigate} from "react-router-dom"


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEntrar = () => {
        console.log(email)
        console.log(password)
    }
    return(
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick={handleEntrar}>
                    entrar
                </button>
            </form>
        </div>
    )
} 