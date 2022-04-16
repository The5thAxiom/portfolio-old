import React from 'react';
import { useState, useEffect } from 'react';

type arrayForCycle = { array: string[]; delay?: number };

export default function CycleTrough({ array, delay = 1000 }: arrayForCycle) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentIndex((currentIndex + 1) % array.length),
            delay
        );
        return () => clearInterval(interval); // cleanup function (equivalent to componentDidUnmount)
    }, [currentIndex]); // run whenever the currentIndex is changed

    return (
        <u>
            <b>{array[currentIndex]}</b>
        </u>
    );
}
