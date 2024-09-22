import { Formulario, Plantilla, Chat } from "./pages";

// Definir el tipo de las rutas
interface AppRoute {
  path: string;
  element: JSX.Element;
}

// Especificar el tipo de las rutas para TypeScript
export const routes: AppRoute[] = [
  {
    path: '/',
    element: <Plantilla />
  },
  {
    path: '/formulario',
    element: <Formulario />
  },
  {
    path: '/chat',
    element: <Chat />
  },
];
