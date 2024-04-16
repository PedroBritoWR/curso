
import { UsuarioLogadoProvider } from "./contexts";
import { Rotas } from "./routes";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Rotas />
    </UsuarioLogadoProvider>
  );
}


