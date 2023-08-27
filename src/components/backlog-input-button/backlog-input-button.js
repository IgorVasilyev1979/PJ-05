import React from 'react';

class BacklogInputButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {enterTask: false};
        this.state = { emptyInput: true };
    }
    onClickAddCard = () => {
        this.setState({ enterTask: true });
        this.setState({ emptyInput: true });
      };
    onInputHandler = () => {
        const taskNameInput = document.getElementById("backlog-task-name");
        if (taskNameInput.value === "") this.setState({ emptyInput: true });
        else  this.setState({ emptyInput: false });  
    };
    onClickSubmit = () => {
        const { addTask } = this.props;
        const taskNameInput = document.getElementById("backlog-task-name");
        addTask(taskNameInput.value);
        this.setState({ enterTask: false });
      };
    render() {
        const { enterTask } = this.state;
        const { emptyInput } = this.state;
        if (!enterTask)
        return (
            <>
                <button className="backlog-button-add" onClick={this.onClickAddCard}>+ Add card</button> 
            </>         
        )
        else if (!emptyInput)
        return (
            <>
                <input className="backlog-input" autoFocus onInput={this.onInputHandler} type="text" id="backlog-task-name" name="backlogTaskName" required />          
                <button className="backlog-button-submit" onClick={this.onClickSubmit}>Submit</button> 
            </>         
        )
        else
        return (
            <>
                <input className="backlog-input" autoFocus onInput={this.onInputHandler} type="text" id="backlog-task-name" name="backlogTaskName" required />          
                <button className="backlog-button-submit-disabled" onClick={this.onClickSubmit} disabled >Submit</button> 
            </>         
        );
    }
}

export default BacklogInputButton;