import React, { useState } from 'react';

const ColorButton = ({ typeOfColor }) => {
    const [color, setColor] = useState('#000000');

    function generateRandomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandomNumber(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = generateRandomNumber(256);
        const g = generateRandomNumber(256);
        const b = generateRandomNumber(256);

        rgbColor = `rgb(${r}, ${g}, ${b})`
        setColor(rgbColor);
    }
    return (
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} style={{ background: color }}>Generate Random Color <h1>{color}</h1></button>
    )
}

export default ColorButton;