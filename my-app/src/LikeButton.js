import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
    // Initialize state with the value of the likeCount prop
    const [likes, setLikes] = useState(likeCount);

    // Function to increment the likes count
    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
        </div>
    );
};

export default LikeButton;
