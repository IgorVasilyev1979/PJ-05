import React from 'react'
import BackLogList from '../backlog-list/backlog-list';
import ReadyList from '../ready-list/ready-list';
import InProgressList from '../in-progress-list/in-progress-list';
import FinishedList from '../finished-list/finished-list';

const ListsBoard = ({data}) => {
    /* const dataMock = this.props;
    console.log( dataMock.props[0].title ); */
    console.log(data);
    return (
        <>
            <BackLogList data={data[0]}/>
            <ReadyList />
            <InProgressList />
            <FinishedList />
        </>
    );
};

export default ListsBoard;