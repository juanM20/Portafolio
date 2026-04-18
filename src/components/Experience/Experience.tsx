

import '../../styles/Experience.css';

const Experience = () => {
    return (
        <div className="exp-content">
            <h1>Experience</h1>

            <div className="company-experience">
                <div className="company-experience-card">
                    <img className="company-logo" src="/images/bbva-logo.png" alt="BBVA logo" />
                    <div>
                        <h2>
                            <a className="company-link" href="https://bbva.mx" target="_blank" rel="noreferrer">
                                BBVA Web y Móvil
                            </a>
                        </h2>
                        <p>
                            Tengo experiencia en la aplicación web y móvil de BBVA, trabajando en funcionalidades clave,
                            mejoras de interfaz y soporte de calidad. Este proyecto me permitió aplicar React, diseño
                            responsive y una mentalidad de producto enfocada en el usuario.
                        </p>
                    </div>
                </div>
            </div>

            <div className="project-links">
                <h2>Netlify Projects</h2>
                <ul className="project-list">
                    <li>
                        <a className="project-card" href="https://deykgamming.netlify.app" target="_blank" rel="noreferrer">
                            <span>deykgamming.netlify.app</span>
                            <small>Gaming project deployment</small>
                        </a>
                    </li>
                    <li>
                        <a className="project-card" href="https://dogapifront.netlify.app" target="_blank" rel="noreferrer">
                            <span>dogapifront.netlify.app</span>
                            <small>Dog API frontend</small>
                        </a>
                    </li>
                    <li>
                        <a className="project-card" href="https://our-story-js.netlify.app" target="_blank" rel="noreferrer">
                            <span>our-story-js.netlify.app</span>
                            <small>Storytelling web app</small>
                        </a>
                    </li>
                    <li>
                        <a className="project-card" href="https://synth-tt2.netlify.app" target="_blank" rel="noreferrer">
                            <span>synth-tt2.netlify.app</span>
                            <small>Music synth experience</small>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;