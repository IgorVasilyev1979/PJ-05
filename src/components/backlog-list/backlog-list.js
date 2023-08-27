import React from 'react'
import ListItem from '../list-item/list-item';
import BacklogInputButton from '../backlog-input-button/backlog-input-button';

const BackLogList = ({data, addTask, setBacklogListEmptyFalse, setBacklogListEmptyTrue}) => {
    return (
        <>
            <div className="backlog-list list">
                <div>Backlog</div>
                {data.map(task => (
                    task.list === 'backlog' && <ListItem name={ task.name } id={ task.id } />
                ))}
                <BacklogInputButton addTask={addTask}/>
            </div>
        </>
    );
};

export default BackLogList;