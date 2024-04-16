interface IButtonLoginProps {
  type?: string;
  onClick: () => void;
  children: React.ReactNode;
}


export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
  return (
    <button>
      {children}
    </button>
  );
}