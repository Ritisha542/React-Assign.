// // import React from 'react';
// import ProfileCard from './ProfileCard'; // Adjust the path if necessary

// const App = () => {
//     return (
//         <div>
//             <h1>Profile Cards</h1>
//             <ProfileCard name="Ajay" age={25} location="New York" />
//             <ProfileCard name="Ritisha" age={30} location="San Francisco" />
//             <ProfileCard name="Taheyung" age={22} location="Chicago" />
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import StatusMessage from './StatusMessage'; // Import the StatusMessage component
// import Greeting from './Greeting'; // If you also want to use Greeting
// import ProfileCard from './ProfileCard'; // If you also want to use ProfileCard

// const App = () => {
//     return (
//         <div>
//             <h1>My Application</h1>

//             {/* Example usage of StatusMessage */}
//             <StatusMessage status="success" />
//             <StatusMessage status="error" />
//             <StatusMessage status="unknown" />

//             {/* Optional: Greeting and ProfileCard components */}
//             <Greeting name="Ritisha" />
//             <ProfileCard name="Ritisha" age={25} location="New York" />
//         </div>
//     );
// };

// export default App;
// import React from 'react';
// import Counter from './Counter'; // Import the Counter component
// import StatusMessage from './StatusMessage'; // Other components as needed
// import Greeting from './Greeting'; 
// import ProfileCard from './ProfileCard';

// const App = () => {
//     return (
//         <div>
//             <h1>My Application</h1>

//             {/* Example usage of Counter component */}
//             <Counter />

//             {/* Optional: Other components */}
//             <StatusMessage status="success" />
//             <Greeting name="Ritisha" />
//             <ProfileCard name="Ritisha" age={25} location="New York" />
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import LikeButton from './LikeButton'; // Import the LikeButton component
// import Counter from './Counter';
// import StatusMessage from './StatusMessage'; 
// import Greeting from './Greeting'; 
// import ProfileCard from './ProfileCard';

// const App = () => {
//     return (
//         <div>
//             <h1>My Application</h1>

//             {/* Example usage of LikeButton component with an initial like count */}
//             <LikeButton likeCount={5} />

//             {/* Optional: Other components */}
//             <Counter />
//             <StatusMessage status="success" />
//             <Greeting name="Alice" />
//             <ProfileCard name="Alice" age={25} location="New York" />
//         </div>
//     );
// };

// export default App;
// import React from 'react';
// import Timer from './Timer'; // Import the Timer component
// import LikeButton from './LikeButton';
// import Counter from './Counter';
// import StatusMessage from './StatusMessage'; 
// import Greeting from './Greeting'; 
// import ProfileCard from './ProfileCard';

// const App = () => {
//     return (
//         <div>
//             <h1>My Application</h1>

//             {/* Example usage of Timer component with a start time of 10 seconds */}
//             <Timer start={10} />

//             {/* Optional: Other components */}
//             <LikeButton likeCount={5} />
//             <Counter />
//             <StatusMessage status="success" />
//             <Greeting name="Ritisha" />
//             <ProfileCard name="Ritisha" age={25} location="New York" />
//         </div>
//     );
// };

// export default App;
// import React, { useState } from 'react';
// import ColorPicker from './ColorPicker'; // Import the ColorPicker component

// const App = () => {
//     // State to store the selected color
//     const [selectedColor, setSelectedColor] = useState('#ffffff'); // Default color is white

//     // Callback function to handle the color change
//     const handleColorChange = (color) => {
//         setSelectedColor(color); // Update the state with the selected color
//     };

//     return (
//         <div>
//             <h1>Color Picker App</h1>

//             {/* Display the selected color */}
//             <div style={{ backgroundColor: selectedColor, width: '100px', height: '100px', border: '1px solid black' }}>
//                 Selected Color
//             </div>

//             {/* Use the ColorPicker component */}
//             <ColorPicker onColorChange={handleColorChange} />
//         </div>
//     );
// };

// export default App;
// import React, { useState } from 'react';
// import TextInput from './TextInput';  // Import the TextInput component

// const App = () => {
//     // State to hold the value from TextInput
//     const [currentText, setCurrentText] = useState('');

//     // Callback function to update the current text
//     const handleTextChange = (newText) => {
//         setCurrentText(newText);
//     };

//     return (
//         <div>
//             <h1>Text Input Example</h1>

//             {/* Display the current text */}
//             <p>Current Text: {currentText}</p>

//             {/* Use the TextInput component and pass the callback */}
//             <TextInput onTextChange={handleTextChange} />
//         </div>
//     );
// };

// export default App;
// import React, { useState } from 'react';
// import ToggleSwitch from './ToggleSwitch';  // Import the ToggleSwitch component

// const App = () => {
//     // State to track the toggle state (on/off)
//     const [isSwitchOn, setIsSwitchOn] = useState(false);

//     // Function to toggle the switch state
//     const handleToggle = () => {
//         setIsSwitchOn(prevState => !prevState); // Toggle the state
//     };

//     return (
//         <div>
//             <h1>Toggle Switch Example</h1>

//             {/* Display the current state of the switch */}
//             <p>Switch is {isSwitchOn ? 'ON' : 'OFF'}</p>

//             {/* Use the ToggleSwitch component and pass the current state and toggle function */}
//             <ToggleSwitch isOn={isSwitchOn} toggleState={handleToggle} />
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import TodoList from './TodoList';  // Import the TodoList component

// const App = () => {
//     // Array of todos
//     const todos = ['Learn React', 'Complete the project', 'Read a book'];

//     return (
//         <div>
//             <h1>My Todo App</h1>

//             {/* Pass the todos array as a prop to the TodoList component */}
//             <TodoList todos={todos} />
//         </div>
//     );
// };

// export default App;

import React from 'react';
import ProductCardList from './ProductCardList'; // Import the ProductCardList component

const App = () => {
    return (
        <div>
            <h1>Product List</h1>
            <ProductCardList />
        </div>
    );
};

export default App;
