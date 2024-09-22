import { cambiarTamanoFuente } from '../utils/Plantilla/fuentePlantilla';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();

  const handleFontSizeChange = (incremento: number) => {
    // Asegúrate de que los selectores apuntan a los elementos correctos
    cambiarTamanoFuente(incremento, '.iconos * , .timeline * , .contenido *');
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <span 
        className="material-symbols-outlined" 
        onClick={() => handleFontSizeChange(1)}
      >
        uppercase
      </span>
      <span 
        className="material-symbols-outlined" 
        onClick={() => handleFontSizeChange(-1)}
      >
        lowercase
      </span>
      <h2 className="logo">Turisticapp</h2>
      <i className="fa-solid fa-language">
        <button onClick={() => handleLanguageChange('es')}>ES</button>
        <button onClick={() => handleLanguageChange('en')}>EN</button>
      </i>
    </header>
  );
};

export default Header;
