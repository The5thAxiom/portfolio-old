import React from 'react';
import CycleTrough from './components/cycleThrough';
import { general, projects } from './data';

export default function App() {
    return (
        <main>
            <section id='index'>
                <h1>Hello 👋, I am Samridh!</h1>
                <p>{general.intro}</p>
                I am a: <CycleTrough array={general.roles} />
            </section>
            <section id='projects'>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <article key={index} id={project.name}>
                        {project.directLink ? (
                            <h3>
                                <a href={project.directLink}>{project.name}</a>
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
                        {index !== projects.length - 1 && <hr />}
                    </article>
                ))}
            </section>
            <section id='skills'>
                <h2>Skills</h2>
                <h3>Programming:</h3>
                <ul>
                    {general.programmingSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h3>General Tech</h3>
                <ul>
                    {general.techSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
