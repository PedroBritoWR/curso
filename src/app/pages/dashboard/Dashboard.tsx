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

    const handleCheckboxChange = (title: string) => {
        setLista((oldLista) => {
            return oldLista.map((item) => {
                if (item.title === title) {
                    return {
                        ...item,
                        isSelected: !item.isSelected,
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
                    <li key={item.title}>
                        <input
                            type='checkbox'
                            checked={item.isSelected}
                            onChange={() => handleCheckboxChange(item.title)}
                        />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
