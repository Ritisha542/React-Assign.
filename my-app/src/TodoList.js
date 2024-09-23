import React from 'react';

const TodoList = ({ todos }) => {
    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li> // Render each todo in a list item
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
