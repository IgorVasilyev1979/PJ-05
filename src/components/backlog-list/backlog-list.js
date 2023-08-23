import React from 'react'
import BackLogListItem from '../backlog-list-item/backlog-list-item';

const BackLogList = ({data}) => {
    console.log(data);
    return (
        <>
            <div>{data.title}</div>
            {/* <BackLogListItem name={ data.issues[0].name } id={ data.issues[0].id } />
            <BackLogListItem name={ data.issues[1].name } id={ data.issues[1].id } />
            <BackLogListItem name={ data.issues[2].name } id={ data.issues[2].id } /> */}
            {data.issues.map(issue => (
                <BackLogListItem name={ issue.name } id={ issue.id } />
            ))}
        </>
    );
};

export default BackLogList;