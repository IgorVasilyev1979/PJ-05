import React from 'react'
import ListItem from '../list-item/list-item';
import InProgressInputButton from '../in-progress-input-button/in-progress-input-button';

const InProgressList = ({data, inProgressAddTask, isReadyNotEmpty}) => {
    return (
        <>
            <div className="in-progress-list list">
                <div>In Progress</div>
                {data.map(task => (
                    task.list === 'in-progress' && <ListItem name={ task.name } id={ task.id } />
                ))}
                <InProgressInputButton data={data} inProgressAddTask={inProgressAddTask} isReadyNotEmpty={isReadyNotEmpty} />
            </div>
        </>
    );
};

export default InProgressList;