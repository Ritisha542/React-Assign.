import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
    // State to manage the value of the input
    const [inputValue, setInputValue] = useState('');

    // Handle input change
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue); // Update the local state
        onTextChange(newValue);  // Pass the new value to the parent component
    };

    return (
        <div>
            <label htmlFor="text-input">Enter Text: </label>
            <input
                type="text"
                id="text-input"
                value={inputValue}      // Controlled component
                onChange={handleInputChange}  // Update state and notify parent
            />
        </div>
    );
};

export default TextInput;
