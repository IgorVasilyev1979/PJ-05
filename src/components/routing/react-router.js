import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ShowLocationInfoWithRouter from './nav-info';
import PageNotFound from '../page-not-found/page-not-found';
import ListsBoard from '../lists-board/lists-board';
import TaskDescription from '../task-description/task-description';

class ReactRouter extends React.Component {
    
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
            <Router>
                <main className="main">
                    <Switch>
                        <Route path="/" exact render={() => <ListsBoard data={data} addTask={addTask} readyAddTask={readyAddTask} inProgressAddTask={inProgressAddTask} finishedAddTask={finishedAddTask} isBacklogNotEmpty={isBacklogNotEmpty} isReadyNotEmpty={isReadyNotEmpty} isInProgressNotEmpty={isInProgressNotEmpty} />} />
                        <Route path="/tasks" render={() => <TaskDescription data={data} />} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </main>    
            </Router>
            
        );
    }
}

export default ReactRouter;