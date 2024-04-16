import { useCallback, useState } from 'react';

interface IListItem {
    title: string;
    isSelected: boolean;
}


export const Dashboard = () => {
    const [lista, setLista] = useState<IListItem[]>([]);

    const handleInputKeydown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;
            const value = e.currentTarget.value;
            e.currentTarget.value = '';

            setLista((oldLista) => {

                if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista;

                return [
                    ...oldLista,
                    {
                        title: value,
                        isSelected: false,
                    }];

            });

        }
    }, [])

    return (
        <div>
            <p>lista</p>

            <input
                onKeyDown={handleInputKeydown}
            />

            <ul>
                {lista.map((ListItem) => {
                    return <li key={ListItem.title}>
                        <input type='checkbox' />
                        {ListItem.title}

                    </li>
                })}
            </ul>

        </div>

    );
}

