import React from 'react';
import CycleTrough from './components/cycleThrough';
import Imp from './components/imp';
import OutboundLink from './components/outboundLink';
import { general, projects } from './data';
import { GithubIcon, ExplorerIcon } from './icons';

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
                <span style={{ fontSize: '2rem' }}>
                    I am a:{' '}
                    <Imp>
                        <CycleTrough array={general.roles} />
                    </Imp>
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
                <p>
                    Hello reader! I am <Imp>{general.name}</Imp>. I'm a UG
                    Student at <Imp>VIT Chennai</Imp>, pursuing a{' '}
                    <Imp>BTech in Computer Science and Engineering</Imp>.
                    {general.intro}
                </p>
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
                        <h2>
                            {project.name}{' '}
                            <OutboundLink
                                className='project-icon-link'
                                to={project.githubLink}
                            >
                                {GithubIcon}
                            </OutboundLink>{' '}
                            {project.directLink && (
                                <OutboundLink
                                    to={project.directLink}
                                    className='project-icon-link'
                                >
                                    {ExplorerIcon}
                                </OutboundLink>
                            )}
                        </h2>
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
    //             <h2>Member of Linux Club</h2>
    //         </>
    //     ),
    // },
    // {
    //     title: 'Education',
    //     link: '/education',
    //     content: (
    //         <>
    //             <h1>Education</h1>
    //         </>
    //     ),
    // },
    // {
    //     title: 'Contact',
    //     link: '/contact',
    //     content: (
    //         <>
    //             <h1>Contact Me!</h1>
    //         </>
    //     ),
    // },
];
