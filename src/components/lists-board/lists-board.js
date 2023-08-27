import React from 'react'
import BackLogList from '../backlog-list/backlog-list';
import ReadyList from '../ready-list/ready-list';
import InProgressList from '../in-progress-list/in-progress-list';
import FinishedList from '../finished-list/finished-list';

class ListsBoard extends React.Component {

    render() {
        const { data } = this.props;
        const { addTask } = this.props;
        const { readyAddTask } = this.props;
        const { inProgressAddTask } = this.props;
        const { finishedAddTask } = this.props;
        const { isBacklogNotEmpty } = this.props;
        const { isReadyNotEmpty } = this.props;
        const { isInProgressNotEmpty } = this.props; 

        return (
            <>
                <div className="lists-container">
                    <BackLogList data={data} addTask={addTask} />
                    <ReadyList data={data} readyAddTask={readyAddTask} isBacklogNotEmpty={isBacklogNotEmpty} />
                    <InProgressList data={data} inProgressAddTask={inProgressAddTask} isReadyNotEmpty={isReadyNotEmpty} />
                    <FinishedList data={data} finishedAddTask={finishedAddTask} isInProgressNotEmpty={isInProgressNotEmpty} />
                </div>
            </>         
        )
    }
}

export default ListsBoard;