import React, { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}



export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
  children?: React.ReactNode;

}
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
  const handleLogout = useCallback(() => {
    console.log('logout efetuado!')
  }, []);

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'predo', logout: handleLogout }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
}