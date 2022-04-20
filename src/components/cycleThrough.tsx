import React from 'react';
import { useState, useEffect } from 'react';

type arrayForCycle = { array: string[]; delay?: number };

export default function CycleTrough({ array, delay = 1000 }: arrayForCycle) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    let maxLen = 0;
    array.forEach(el => {
        if (el.length > maxLen) maxLen = el.length;
    });
    const paddedArray = array.map(
        el => el + '\u00A0'.repeat(maxLen - el.length)
    );

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentIndex((currentIndex + 1) % array.length),
            delay
        );
        return () => clearInterval(interval); // cleanup function (equivalent to componentDidUnmount)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]); // run whenever the currentIndex is changed
    // console.log(paddedArray[currentIndex]);
    return <b>{paddedArray[currentIndex]}</b>;
}
