import React from 'react';
import OutboundLink from './components/outboundLink';
import { GithubIcon, BlogIcon, LinkedinIcon, InstagramIcon } from './icons';

export const general = {
    name: 'Samridh Anand Paatni',
    intro: 'I like to code, learn about languages, play table tennis and ❤️ to cook!',
    roles: [
        'web dev enthusiast',
        'UG Student at VIT Chennai',
        'Member of Linux Club',
        'computer geek',
        'cook',
        'food lover',
        'language nerd',
    ],
    programmingSkills: [
        'javascript',
        'html',
        'css',
        'python',
        'php',
        'C/C++',
        'Java',
        'Scala',
    ],
    techSkills: ['vim', 'LaTeX', 'git/github', 'bash shell'],
};

type socialLink = { name: string; link: string; icon?: any };
export const socialLinks: socialLink[] = [
    {
        name: 'Github',
        link: 'https://github.com/The5thAxiom',
        icon: GithubIcon,
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/samridh-anand-paatni-57a045215/',
        icon: LinkedinIcon,
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/samridhpaatni/',
        icon: InstagramIcon,
    },
    {
        name: 'Blog',
        link: 'https://blog.samridh.live',
        icon: BlogIcon,
    },
];

type project = {
    name: string;
    about: JSX.Element;
    githubLink: string;
    directLink: string | null;
};
export const projects: project[] = [
    {
        name: 'Linux Club Website',
        about: (
            <>
                A React.js site to showcase{' '}
                <OutboundLink to='https://github.com/lugvitc'>
                    VIT Chennai's Linux Club
                </OutboundLink>
                , made by me and{' '}
                <OutboundLink to='https://github.com/3V3RYONE'>
                    @3V3YONE
                </OutboundLink>
            </>
        ),
        githubLink: 'https://github.com/lugvitc/lugvitc.github.io',
        directLink: 'https://lugvitc.github.io',
    },
    {
        name: 'Cookbook',
        about: (
            <>
                A typescript React frontend with a flask REST api, a WIP site
                for keeping track of the stuff I like to cook!
            </>
        ),
        githubLink: 'https://github.com/The5thAxiom/cookbook',
        directLink: 'https://cookbook-demo-the5thaxiom.herokuapp.com',
    },
    {
        name: 'Samazon',
        about: (
            <>
                HTML, CSS, Javascript and PHP a (still WIP) simple mock
                e-commerce site made like they used to in the good old days.
                Samazon, we find what you want and give it to you!'
            </>
        ),
        githubLink: 'https://github.com/The5thAxiom/samazon',
        directLink: 'https://samazon-demo-the5thaxiom.herokuapp.com/',
    },
    {
        name: 'VITC Professors Web Scraper',
        about: (
            <>
                A web scraper to get information about our faculty at VIT
                Chennai. Made for{' '}
                <OutboundLink to='https://lugvitc.github.io/#/events#adrenaline'>
                    Adrenaline/FOSS Day
                </OutboundLink>
                .
            </>
        ),
        githubLink: 'https://github.com/The5thAxiom/vitc-professor-scraper',
        directLink: null,
    },
    {
        name: 'jsGames',
        about: <>Simple games made in js for fun</>,
        githubLink: 'https://github.com/The5thAxiom/jsGames',
        directLink: null,
    },
];
