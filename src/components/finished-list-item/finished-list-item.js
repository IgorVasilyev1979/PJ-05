import React from 'react'
import { NavLink } from 'react-router-dom';

const FinishedListItem = ({ name, id, finishedAddTask, onClickFinishedItem }) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        finishedAddTask(id);
        onClickFinishedItem();
      };
    return (
        <>
            <NavLink className="list-item-add" to={`/tasks/${id}`} onClick = {onClickHandler}>{ name }</NavLink>
        </>
    );
};

export default FinishedListItem;