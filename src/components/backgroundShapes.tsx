import React from 'react';
import './backgroundShapes.css';

export default function BackgroundShapes() {
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
            <div id='bg-circle-two'>
                <div className='offset-heading'>
                    <b>Samridh Anand Paatni</b>
                </div>
            </div>
            <div id='bg-circle-three' />
        </div>
    );
}
