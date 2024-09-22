import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { AppRouter } from './Router'; 
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from "./translations/Plantilla/es/global.json";
import en from "./translations/Plantilla/en/global.json";
import es_form from "./translations/Formulario/es/global.json";
import en_form from "./translations/Formulario/en/global.json";

i18next.use(initReactI18next).init({
  lng: 'es', // Configuración inicial del idioma
  resources: {
    es: {
      translation: {
        plantilla: es,
        formu: es_form
      }
    },
    en: {
      translation: {
        plantilla: en,
        formu: en_form
      }
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter /> {/* Configuración del enrutador */}
    </BrowserRouter>
  </StrictMode>,
);
