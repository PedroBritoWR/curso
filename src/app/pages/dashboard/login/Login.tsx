import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const emailLength = useMemo(() => {

        console.log("executou")
        return email.length * 1000;
    }, [email,])



    useEffect(() => {
        if (window.confirm('você é homem?')) {
            console.log('homem')
        } else {
            console.log('mulher')
        }
    }, []);

    useEffect(() => {
        console.log(email)
    }, [email]);

    useEffect(() => {
        console.log(password)
    }, [password]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
    }, [email, password])

    return (
        <div>
            <form>
                <p>Quantidade de caracteres do email: {emailLength}</p>
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    value={password}
                    onChange={newValue => setPassword(newValue)}


                />

                {/* <label>
                    <span>Senha</span>
                    <input
                        ref={inputPasswordRef}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label> */}
                <button
                    type="button"
                    onClick={handleEntrar}>
                    entrar
                </button>
            </form>
        </div>
    )
};