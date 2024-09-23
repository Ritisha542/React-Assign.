import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
    // Initialize state with the value of the start prop
    const [time, setTime] = useState(start);

    // useEffect to update the timer every second
    useEffect(() => {
        // Create a timer that updates the time state every second
        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime - 1); // Decrement the time by 1 every second
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs only once

    // If time reaches zero, stop the timer by not allowing negative values
    if (time <= 0) {
        return <p>Time's up!</p>;
    }

    return (
        <div>
            <h2>Timer: {time} seconds</h2>
        </div>
    );
};

export default Timer;
