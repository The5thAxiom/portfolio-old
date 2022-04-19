import React from 'react';

type linkType = { to: string; className?: string };

export default function OutboundLink({
    children,
    to,
    className,
}: React.PropsWithChildren<linkType>) {
    return (
        <a className={className} href={to} target='_blank' rel='noreferrer'>
            {children}
        </a>
    );
}
