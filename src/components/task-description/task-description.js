import React from 'react'
import { NavLink } from 'react-router-dom';

const TaskDescription = ({data}) => {
    let task = data.find(task => task.id === window.location.pathname.slice(7))

    const WriteDescription = () => {
        data[task.id-1].description = document.getElementById("textArea").value;
        localStorage.setItem('app_data', JSON.stringify(data));
    }

    return (
        <>
            <div className="task-description-block">
                <NavLink className="task-desc-navlink" to="/">
                    <div className="cross"></div>
                </NavLink>
                <div className="task-name">{task.name}</div>
                <textarea className="textArea" id="textArea" onBlur={WriteDescription}>{task.description}</textarea>  
            </div>
        </>
    );
};

export default TaskDescription;