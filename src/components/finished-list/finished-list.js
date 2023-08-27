import React from 'react'
import ListItem from '../list-item/list-item';
import FinishedInputButton from '../finished-input-button/finished-input-button';

const FinishedList = ({data, finishedAddTask, isInProgressNotEmpty}) => {
    return (
        <>
            <div className="finished-list list">
                <div>Finished</div>
                {data.map(task => (
                    task.list === 'finished' && <ListItem name={ task.name } id={ task.id } />
                ))}
                <FinishedInputButton data={data} finishedAddTask={finishedAddTask} isInProgressNotEmpty={isInProgressNotEmpty} />
            </div>
        </>
    );
};

export default FinishedList;