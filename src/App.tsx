import React from 'react';
import BackgroundShapes from './components/backgroundShapes';
import CycleTrough from './cycleThrough';
import data from './data.json';

export default function App() {
    return (
        <>
            <BackgroundShapes />
            <nav>
                {data.socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.link}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {link.name}
                        <br />
                    </a>
                ))}
            </nav>
            <header>
                <h1>Samridh</h1>
                <p>{data.intro}</p>
                I am a: <CycleTrough array={data.roles} />
            </header>
            <main>
                <article id='projects'>
                    <h2>Projects</h2>
                    {data.projects.map((project, index) => (
                        <section key={index} id={project.name}>
                            {project.directLink ? (
                                <h3>
                                    <a href={project.directLink}>
                                        {project.name}
                                    </a>
                                </h3>
                            ) : (
                                <h3>{project.name}</h3>
                            )}
                            <b>
                                <a href={project.githubLink}>
                                    check it out on github
                                </a>
                            </b>
                            <p>{project.about}</p>
                            {index !== data.projects.length - 1 && <hr />}
                        </section>
                    ))}
                </article>
                <article id='skills'>
                    <h2>Programming Skills:</h2>
                    <ul>
                        {data.programmingSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <h2>General Tech Skills:</h2>
                    <ul>
                        {data.techSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </article>
            </main>
            <footer>Made using </footer>
        </>
    );
}
