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

    const handleInputKeydown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;
            const value = e.currentTarget.value;
            e.currentTarget.value = '';

            TarefasService.create({ title: value, isCompleted: false, })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message)
                    } else {
                        setLista(result);
                    }
                })

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {

                })


            setLista((oldLista) => {

                if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista;

                return [
                    ...oldLista,
                    {
                        id: oldLista.length,
                        title: value,
                        isCompleted: false,
                    }];

            });

        }
    }, [])

    const handleCheckboxChange = (title: string) => {
        setLista((oldLista) => {
            return oldLista.map((item) => {
                if (item.title === title) {
                    return {
                        ...item,
                        isSelected: !item.isCompleted,
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
                            onChange={() => handleCheckboxChange(item.title)}
                        />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
