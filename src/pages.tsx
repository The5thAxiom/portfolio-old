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
        title: 'Education',
        link: '/education',
        content: (
            <>
                <h1>Education</h1>
                <h2>Btech in Computer Science and Education</h2>
                <b>September, 2020 to Present</b>
                <p>
                    I am currently a 2nd Year UG student at{' '}
                    <Imp>VIT, Chennai</Imp>. I have an 8.84 GPA accross 3
                    semesters.
                </p>
                <h2>
                    Class XII<sup>th</sup> (PCM)
                </h2>
                <b>June, 2020</b>
                <p>
                    I completed my class 12<sup>th</sup> education from{' '}
                    <Imp>Millennium School, Lucknow</Imp>. I studied science and
                    scored 91.2%.
                </p>
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
    {
        title: 'Experience',
        link: '/experience',
        content: (
            <>
                <h1>Experience</h1>
                <h2>
                    Winning Team Member of VIT Cyscom's Cyber Defenders CTF
                    Event
                </h2>
                <b>Held on 20th April, 2022</b>
                <p>
                    Cyber Defenders was a capture-the-flag event conducted by
                    Cyscom, VIT Chennai's chapter of OWASP. It consisted of
                    finding flags hidded in plain sight by using our
                    cybersecurity and hacking knowledge. My team stood first in
                    the event.
                </p>
                <h2>Member of Linux Club</h2>
                <b>October 2021 to Present</b>
                <p>
                    A club dedicated to promoting Linux and Free and Open Source
                    Software (FOSS). I work on their{' '}
                    <OutboundLink to='https://lugvitc.github.io'>
                        website
                    </OutboundLink>{' '}
                    and helped organise the{' '}
                    <OutboundLink to='https://lugvitc.github.io/#/events#adrenaline'>
                        Adrenaline/FOSS Day
                    </OutboundLink>{' '}
                    event.
                </p>
            </>
        ),
    },
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
