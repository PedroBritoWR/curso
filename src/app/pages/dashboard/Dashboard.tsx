import { useState } from 'react';


export const Dashboard = () => {
    const [lista, setLista] = useState<string[]>(['teste1', 'teste2', 'teste3'])

    const handleInputKeydown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            if (event.currentTarget.value.trim().length === 0) return;
            const value = event.currentTarget.value;
            event.currentTarget.value = '';

            setLista((oldLista) => {

                if (oldLista.includes(value)) return oldLista;

                return [...oldLista, value];

            });

        }
    }

    return (
        <div>
            <p>lista</p>

            <input
                onKeyDown={handleInputKeydown}
            />

            <ul>
                {lista.map((value) => {
                    return <li key={value}>{value}</li>
                })}
            </ul>

        </div>

    );
}

