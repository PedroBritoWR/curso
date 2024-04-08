import { useCallback, useEffect, useMemo, useRef, useState } from "react"


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const emailLength = useMemo (() => {
        
        console.log("executou")
         return email.length * 1000;
    },[email,]) 


    useEffect (() =>{
        if (window.confirm('você é homem?')) {
            console.log('homem')
        }else {
            console.log('mulher')
        }   
    }, []);

    useEffect (() =>{
            console.log(email)
    }, [email]);

    useEffect (() =>{
        console.log(password)
    }, [password]);

    const handleEntrar = useCallback(() =>{
        console.log(email)
        console.log(password)
    }, [email, password])
  
    return(
        <div>
            <form>
                <p>Quantidade de caracteres do email: {emailLength}</p>
                <label>
                    <span>Email</span>
                    <input type="text"
                     value={email} 
                     onChange={e => setEmail(e.target.value)} 
                     onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus(): undefined }
                     />
                     
                </label>
                <label>
                    <span>Senha</span>
                    <input 
                    ref={inputPasswordRef}
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    />
                </label>
                <button 
                type="button" 
                onClick={handleEntrar}>
                entrar
                </button>
            </form>
        </div>
    )
} ;