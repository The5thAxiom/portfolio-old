import React from 'react';
import CycleTrough from '../components/cycleThrough';
import { general, projects } from '../data';

type page = {
    title: string;
    link: string;
    content: JSX.Element;
};

export const pages: page[] = [
    {
        title: 'Home',
        link: '/',
        content: (
            <>
                <h1>Hello 👋, I am Samridh!</h1>
                {/* <p>{general.intro}</p> */}
                <span style={{ fontSize: '2rem' }}>
                    I am a: <CycleTrough array={general.roles} />
                </span>
            </>
        ),
    },
    {
        title: 'About',
        link: '/about',
        content: (
            <>
                <h1>About me</h1>
                <p>{general.intro}</p>
                <h2>Things I am good at</h2>
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
            </>
        ),
    },
    {
        title: 'Projects',
        link: '/projects',
        content: (
            <>
                <h1>My Projects</h1>
                {projects.map((project, index) => (
                    <section key={index} id={project.name}>
                        {project.directLink ? (
                            <h2>
                                <a href={project.directLink}>{project.name}</a>
                            </h2>
                        ) : (
                            <h2>{project.name}</h2>
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
            </>
        ),
    },
    // {
    //     title: 'Experience',
    //     link: '/experience',
    //     content: (
    //         <>
    //             <h1>Experience</h1>
    //             <p>lol</p>
    //         </>
    //     ),
    // },
    // {
    //     title: 'Contact Me',
    //     link: '/contact',
    //     content: <>email: ?</>,
    // },
];
