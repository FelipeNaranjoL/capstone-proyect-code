import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Iconos from '../components/Iconos';
import '../styles/plantilla.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Plantilla = () => {
  return (
    <>
      <Header />
      <Timeline />
      <Iconos />
      <footer>
        <p>&copy; 2024 grupo 2k</p>
      </footer>
    </>
  );
};

export default Plantilla;
