import React from 'react'
import { Link } from 'react-router-dom';

const TaskDescription = () => {
    return (
        <>
            <div>{window.location.pathname.slice(7)}</div>
            <Link to="/">ListsBoard</Link>
        </>
    );
};

export default TaskDescription;