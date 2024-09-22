import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { initializeVoice } from '../utils/voice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Importar Link para la navegación

const Timeline: React.FC = () => {
    const { t } = useTranslation(); // Hook de traducción
    // console.log(t);

    useEffect(() => {
        initializeVoice(); // Se asegura que solo se ejecuta una vez
    }, []); // Array de dependencias vacío

    return (
        <>
            {/* Menú de navegación con dos ítems */}
            <ul className="nav justify-content-center button-container">
                <li className="nav-item">
                    <Link className="nav-link btn-custom" aria-current="page" to="/"> {/* Link para navegar a la página principal */}
                        Información
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn-custom" to="/chat"> {/* Link para navegar al formulario */}
                        Recomendaciones IA
                    </Link>
                </li>
            </ul>

            {/* Componente Timeline */}
            <section className="timeline">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            >
                                <h4>1980</h4>
                                <i className="fa-solid fa-bullseye"></i>
                            </button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            >
                                <h4>1990</h4>
                                <i className="fa-solid fa-bullseye"></i>
                            </button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            >
                                <h4>{2010}</h4>
                                <i className="fa-solid fa-bullseye"></i>
                            </button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="experience-slide-one row h-100 align-items-center">
                                    <div className="col-md-5">
                                        <div className="experience-slide-img">
                                            <img src="/img/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="experience-slide-text">
                                            <h3>{t('plantilla.1980_title')}</h3> {/* Traducción */}
                                            <p>{t('plantilla.hello_world')}</p> {/* Traducción */}
                                            <p>{t('plantilla.lorem_text')}</p> {/* Traducción */}
                                            <button className="btn-voice">
                                                <i className="fa-solid fa-microphone-lines fa-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Otras diapositivas */}
                            <div className="carousel-item">
                                <div className="experience-slide-one row h-100 align-items-center">
                                    <div className="col-md-5">
                                        <div className="experience-slide-img">
                                            <img src="/img/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="experience-slide-text">
                                            <h3>{t('plantilla.1990_title')}</h3>
                                            <p>{t('plantilla.hello_again')}</p>
                                            <p>{t('plantilla.lorem_text_long')}</p>
                                            <button className="btn-voice">
                                                <i className="fa-solid fa-microphone-lines fa-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="experience-slide-one row h-100 align-items-center">
                                    <div className="col-md-5">
                                        <div className="experience-slide-img">
                                            <img src="/img/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="experience-slide-text">
                                            <h3>{t('plantilla.2010_title')}</h3>
                                            <p>{t('plantilla.hello_since_2010')}</p>
                                            <p>{t('plantilla.lorem_text_long')}</p>
                                            <button className="btn-voice">
                                                <i className="fa-solid fa-microphone-lines fa-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true">
                                <i className="fa-solid fa-chevron-left"></i>
                            </span>
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true">
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
