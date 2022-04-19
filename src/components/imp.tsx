import React from 'react';

export default function Imp({ children }: React.PropsWithChildren<any>) {
    return <span style={{ color: 'var(--main-pink)' }}>{children}</span>;
}
