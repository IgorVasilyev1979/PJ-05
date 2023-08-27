import React from 'react'
import { NavLink } from 'react-router-dom';

const ReadyListItem = ({ name, id, readyAddTask, onClickReadyItem }) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        readyAddTask(id);
        onClickReadyItem();
      };
    return (
        <>
            <NavLink className="list-item-add" to={`/tasks/${id}`} onClick = {onClickHandler}>{ name }</NavLink>
        </>
    );
};

export default ReadyListItem;