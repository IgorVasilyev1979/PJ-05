import React from 'react'
import { NavLink } from 'react-router-dom';

const ListItem = ({ name, id }) => {
    return (
        <>
            <NavLink className="list-item" to={`/tasks/${id}`}>{ name }</NavLink>
        </>
    );
};

export default ListItem;