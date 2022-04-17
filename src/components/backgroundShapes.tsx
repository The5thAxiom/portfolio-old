import React from 'react';
import './backgroundShapes.css';

export default function BackgroundShapes() {
    return (
        <div id='bg-shapes'>
            <div id='bg-wave'>
                <div className='bg-wave-circle alpha' />
                <div className='bg-wave-circle beta' />
                <div className='bg-wave-circle alpha' />
                <div className='bg-wave-circle beta' />
                <div className='bg-wave-circle alpha' />
                <div className='bg-wave-circle beta' />
                <div className='bg-wave-circle alpha' />
                <div className='bg-wave-circle beta' />
                <div className='bg-wave-circle alpha' />
                <div className='bg-wave-circle beta' />
            </div>
            {/* <div id='bg-circle-one' /> */}
            {/* <div id='bg-circle-two' /> */}
        </div>
    );
}
