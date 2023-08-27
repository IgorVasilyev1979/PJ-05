import React from 'react'
import ListItem from '../list-item/list-item';
import ReadyInputButton from '../ready-input-button/ready-input-button';

const ReadyList = ({data, readyAddTask, isBacklogNotEmpty}) => {
    return (
        <>
            <div className="ready-list list">
                <div>Ready</div>
                {data.map(task => (
                    task.list === 'ready' && <ListItem name={ task.name } id={ task.id } />
                ))}
                <ReadyInputButton data={data} readyAddTask={readyAddTask} isBacklogNotEmpty={isBacklogNotEmpty} />
            </div>
        </>
    );
};

export default ReadyList;