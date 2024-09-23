import React from 'react';

const ToggleSwitch = ({ isOn, toggleState }) => {
    return (
        <div>
            <button onClick={toggleState}>
                {isOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default ToggleSwitch;
