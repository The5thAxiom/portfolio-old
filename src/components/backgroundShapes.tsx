import React from 'react';
import './backgroundShapes.css';

export default function BackgroundShapes() {
    const numWaves = 6;
    return (
        <div id='bg-shapes'>
            <div id='bg-wave'>
                <div className='bg-wave-circle colour' />
                <div className='bg-wave-circle no-colour' />
                <div className='bg-wave-circle colour' />
                <div className='bg-wave-circle no-colour' />
                <div className='bg-wave-circle colour' />
                <div className='bg-wave-circle no-colour' />
                <div className='bg-wave-circle colour' />
                <div className='bg-wave-circle no-colour' />
                <div className='bg-wave-circle colour' />
                <div className='bg-wave-circle no-colour' />
            </div>
            <div id='bg-circle-one' />
            <div id='bg-circle-two' />
        </div>
    );
}
