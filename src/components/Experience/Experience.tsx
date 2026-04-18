

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
                                BBVA Web and Mobile
                            </a>
                        </h2>
                        <ul className="company-detail-list">
                            <li>Created new lit-element components using the latest technologies for the mobile application.</li>
                            <li>Migrated legacy components to the lit-element framework.</li>
                            <li>Collaborated with teams in Spain and Colombia to integrate new front-end solutions.</li>
                            <li>Implemented E2E tests with Cucumber and Jenkins pipelines.</li>
                            <li>Implemented unit tests with Mocha.js and Sinon.</li>
                            <li>Worked closely with the backend team.</li>
                            <li>Implemented AI Agents to increase productivity in the development cycle.</li>
                            <li>Created new web components using TypeScript.</li>
                        </ul>
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