import React from 'react';
import CycleTrough from './components/cycleThrough';
import Imp from './components/imp';
import OutboundLink from './components/outboundLink';
import { general, projects } from './data';
import { GithubIcon, ExplorerIcon } from './icons';
import mainPicture from './Coffee_Structure.jpeg';

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
                {/* <div className='main-picture-container'>
                    <img className='main-picture' src={mainPicture} />
                </div> */}
                <span id='cycling-roles'>
                    I am a:{' '}
                    <Imp>
                        <CycleTrough array={general.roles} />
                    </Imp>
                </span>
            </>
        ),
    },
    {
        title: 'About Me',
        link: '/about',
        content: (
            <>
                <h1>About me</h1>
                <p>
                    Hello reader! I am <Imp>{general.name}</Imp>. I'm a UG
                    Student at <Imp>VIT Chennai</Imp>, pursuing a{' '}
                    <Imp>BTech in Computer Science and Engineering</Imp>.{' '}
                    {general.intro}
                </p>
                <h1>Things I am good at</h1>
                <h2>Programming:</h2>
                <ul>
                    {general.programmingSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h2>General Tech</h2>
                <ul>
                    {general.techSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </>
        ),
    },
    {
        title: 'Experience\n&&\nEducation',
        link: '/education',
        content: (
            <>
                <section id='experience'>
                    <h1>Experience</h1>
                    <h2>
                        Winning Team Member of VIT Cyscom's Cyber Defenders CTF
                        Event
                    </h2>
                    <b>Held on the 19th && 20th of April, 2022</b>
                    <p>
                        Cyber Defenders was a capture-the-flag event conducted
                        by Cyscom, VIT Chennai's chapter of OWASP. It consisted
                        of finding flags hidded in plain sight by using our
                        cybersecurity and hacking knowledge. My team stood first
                        in the event.
                    </p>
                    <h2>Member of Linux Club</h2>
                    <b>October, 2021 to Present</b>
                    <p>
                        A club dedicated to promoting Linux and Free and Open
                        Source Software (FOSS). I work on their{' '}
                        <OutboundLink to='https://lugvitc.github.io'>
                            website
                        </OutboundLink>{' '}
                        and helped organise the{' '}
                        <OutboundLink to='https://lugvitc.github.io/#/events#adrenaline'>
                            Adrenaline/FOSS Day
                        </OutboundLink>{' '}
                        event.
                    </p>
                </section>
                <section id='education'>
                    <h1>Education</h1>
                    <h2>B.Tech in Computer Science and Education</h2>
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
                        <Imp>Millennium School, Lucknow</Imp>. I studied science
                        and scored 91.2%.
                    </p>
                </section>
            </>
        ),
    },
    {
        title: 'My\nProjects',
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
        title: 'Contact Me',
        link: '/contact',
        content: (
            <>
                <h1>Contact Me!</h1>
                <p>Wanna ask something, collaborate or just have a talk?</p>
                <p>
                    Contact me through, LinkedIn, Instagram DM's or just shoot
                    me an email (my id is samridh.anand.paatni at gmail).
                </p>
                <h1>Credits</h1>
                <p>
                    This website was made using{' '}
                    <OutboundLink to='https://reactjs.org/'>
                        React.js
                    </OutboundLink>{' '}
                    and{' '}
                    <OutboundLink to='https://www.typescriptlang.org/'>
                        typescript
                    </OutboundLink>{' '}
                    hosted using Github Pages. . <br />
                    Title bar icon by{' '}
                    <OutboundLink to='https://icon-icons.com/'>
                        icon-icons
                    </OutboundLink>
                    , the rest are from{' '}
                    <OutboundLink to='https://simpleicons.org/'>
                        simple icons
                    </OutboundLink>
                </p>
                <h1>Copyleft</h1>
                <p>
                    This website (and thus the github repo) and the coffee
                    molecule structure image (on the home page) are open-source
                    under the GNU GPL v-2 license.
                </p>
            </>
        ),
    },
];
