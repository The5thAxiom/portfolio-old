import React from 'react';

type page = {
    title: string;
    link: string;
    content: JSX.Element;
};

export const pages: page[] = [
    {
        title: 'About',
        link: '/about',
        content: (
            <>
                <h1>About</h1>
            </>
        ),
    },
    {
        title: 'Projects',
        link: '/projects',
        content: (
            <>
                <h1>Projects</h1>
            </>
        ),
    },
    {
        title: 'Experience',
        link: '/experience',
        content: (
            <>
                <h1>Experience</h1>
            </>
        ),
    },
    {
        title: 'Skills',
        link: '/skills',
        content: (
            <>
                <h1>About</h1>
            </>
        ),
    },
];
