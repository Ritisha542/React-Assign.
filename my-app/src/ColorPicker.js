import React from 'react';

const ColorPicker = ({ onColorChange }) => {
    // Handle the color change event
    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        onColorChange(selectedColor); // Call the parent callback with the selected color
    };

    return (
        <div>
            <label htmlFor="color-picker">Choose a color: </label>
            <input
                type="color"
                id="color-picker"
                onChange={handleColorChange} // Attach the change handler
            />
        </div>
    );
};

export default ColorPicker;
