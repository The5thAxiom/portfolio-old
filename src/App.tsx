import React from 'react';
import data from './data.json';

function App() {
    return (
        <>
            <h1>Samridh</h1>
            <p>{data.intro}</p>
            <h2>I am a:</h2>
            <ul>
                {data.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
            <h2>Projects</h2>
            {data.projects.map((project, index) => (
                <section key={index} id={project.name}>
                    <h3>
                        {project.directLink ? (
                            <h3>
                                <a href={project.directLink}>{project.name}</a>
                            </h3>
                        ) : (
                            <h3>{project.name}</h3>
                        )}
                    </h3>
                    <b>
                        <a href={project.githubLink}>Github Repo</a>
                    </b>
                    <p>{project.about}</p>
                </section>
            ))}
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
        </>
    );
}

export default App;
