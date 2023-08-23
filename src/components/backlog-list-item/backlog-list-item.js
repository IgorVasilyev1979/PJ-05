import React from 'react'
import { NavLink } from 'react-router-dom';

const BackLogListItem = ({ name, id }) => {
    return (
        <>
            <NavLink to={`/tasks/${id}`}>{ name }</NavLink>
        </>
    );
};

export default BackLogListItem;