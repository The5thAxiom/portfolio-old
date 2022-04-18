import React from 'react';
import CycleTrough from './components/cycleThrough';
import Navbar from './components/navbar';
import { general, projects } from './data';

export default function App() {
    return (
        <main>
            <h1>Hello, I am {general.name}!</h1>
            <p>{general.intro}</p>
            I am a: <CycleTrough array={general.roles} />
            <section id='projects'>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <section key={index} id={project.name}>
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
                    </section>
                ))}
            </section>
            <section id='skills'>
                <h2>Programming Skills:</h2>
                <ul>
                    {general.programmingSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h2>General Tech Skills:</h2>
                <ul>
                    {general.techSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
