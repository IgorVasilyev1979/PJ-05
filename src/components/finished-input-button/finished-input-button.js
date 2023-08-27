import React from 'react';
import FinishedListItem from '../finished-list-item/finished-list-item';

class FinishedInputButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {enterTask: false};
    }
    onClickFinishedAddCard = () => {
        this.setState({ enterTask: true });
      };
    onClickFinishedItem = () => {
        this.setState({ enterTask: false });
    };
    render() {
        const { enterTask } = this.state;
        const { data } = this.props;
        const { finishedAddTask } = this.props;
        const { isInProgressNotEmpty } = this.props;
        if (!enterTask)
            if (isInProgressNotEmpty)
                return (
                    <>
                        <button className="finished-button-add" onClick={this.onClickFinishedAddCard}>+ Add card</button> 
                    </>         
                )
            else 
                return (
                    <>
                        <button className="finished-button-add-dis" onClick={this.onClickFinishedAddCard} disabled>+ Add card</button> 
                    </>         
                )
        else
            return (
                <>
                    <div className="list-item-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                        <path d="M1 0.5L11 13L19 0.5" stroke="black"/>
                        </svg>
                    </div>
                    {data.map(task => (
                        task.list === 'in-progress' && <FinishedListItem name={ task.name } id={ task.id } finishedAddTask={finishedAddTask} onClickFinishedItem={this.onClickFinishedItem} />
                    ))}
                </>         
            );
    }
}

export default FinishedInputButton;