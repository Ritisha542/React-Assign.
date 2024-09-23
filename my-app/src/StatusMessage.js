import React from 'react';

const StatusMessage = ({ status }) => {
    let message;

    if (status === 'success') {
        message = 'Operation was successful';
    } else if (status === 'error') {
        message = 'There was an error';
    } else {
        message = 'Status unknown';
    }

    return <p>{message}</p>;
};

export default StatusMessage;
