import { useCallback, useEffect, useState } from 'react';

import { ITarefa, TarefasService } from '../../services/api/tarefas/TarefasService';
import { ApiException } from '../../services/api/ApiException';


export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message)
                } else {
                    setLista(result);
                }
            })
    }, [])

    const handleToggleComplete = useCallback((id:number)=>{
        
    }, [])
    const handleInputKeydown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            const value = e.currentTarget.value.trim();
            if (value.length === 0) return;

            e.currentTarget.value = '';

            if (lista.some((listItem) => listItem.title === value)) return;

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message)
                    } else {
                        setLista((oldLista) => oldLista.concat(result));
                    }
                })
        }
    }, [lista])

    const handleCheckboxChange = (title: string) => {
        setLista((oldLista) => {
            return oldLista.map((item) => {
                if (item.title === title) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    };
                }
                return item;
            });
        });
    };

    return (
        <div>
            <p>Lista</p>

            <input onKeyDown={handleInputKeydown} />

            <ul>
                {lista.map((item) => (
                    <li key={item.id}>
                        <input
                            type='checkbox'
                            checked={item.isCompleted}
                            onChange={() => handleToggleComplete(item.id)}
                        />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
