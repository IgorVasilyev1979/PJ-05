import React from 'react'
import { NavLink } from 'react-router-dom';

const InProgressListItem = ({ name, id, inProgressAddTask, onClickInProgressItem }) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        inProgressAddTask(id);
        onClickInProgressItem();
      };
    return (
        <>
            <NavLink className="list-item-add" to={`/tasks/${id}`} onClick = {onClickHandler}>{ name }</NavLink>
        </>
    );
};

export default InProgressListItem;