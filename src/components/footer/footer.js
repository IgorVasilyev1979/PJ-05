import React from 'react'

const Footer = ({ data }) => {
    var backlogTasks = data.filter(function(element) {
        return element.list === 'backlog';
      });
    var activeTasksCount = backlogTasks.length;
    var finishedTasks = data.filter(function(element) {
        return element.list === 'finished';
      });
    var finishedTasksCount = finishedTasks.length;
    return (
        <footer className="footer">
            <div className="active-tasks-text">Active tasks: {activeTasksCount}</div>
            <div className="finished-tasks-text">Finished tasks: {finishedTasksCount}</div>
            <div className="author-text">Kanban board by Igor, 2023</div>
        </footer>
    ); 
}
export default Footer;