import React, { useState } from 'react';
import './styles.css';
import ColorButton from '../ColorButton';

export default function RandomColorPalette() {

    const [typeOfColor, setTypeOfColor] = useState('hex');

    return (
        <>
            {/* <button className='set-color-type' onClick={() => setTypeOfColor('hex')} >Create HEX Color</button>
            <button className='set-color-type' onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button> */}
            <div style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
            }}>
                <ColorButton typeOfColor={typeOfColor} />
                <ColorButton typeOfColor={typeOfColor} />
                <ColorButton typeOfColor={typeOfColor} />
                <ColorButton typeOfColor={typeOfColor} />
                <ColorButton typeOfColor={typeOfColor} />
            </div>
        </>
    )
}
