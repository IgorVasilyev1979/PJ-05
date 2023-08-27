import React from 'react';
import InProgressListItem from '../in-progress-list-item/in-progress-list-item';

class InProgressInputButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {enterTask: false};
    }
    onClickInProgressAddCard = () => {
        this.setState({ enterTask: true });
      };
    onClickInProgressItem = () => {
        this.setState({ enterTask: false });
    };
    render() {
        const { enterTask } = this.state;
        const { data } = this.props;
        const { inProgressAddTask } = this.props;
        const { isReadyNotEmpty } = this.props;
        if (!enterTask)
            if (isReadyNotEmpty)
                return (
                    <>
                        <button className="inprogress-button-add" onClick={this.onClickInProgressAddCard}>+ Add card</button> 
                    </>         
                )
            else 
                return (
                    <>
                        <button className="inprogress-button-add-dis" onClick={this.onClickInProgressAddCard} disabled>+ Add card</button> 
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
                        task.list === 'ready' && <InProgressListItem name={ task.name } id={ task.id } inProgressAddTask={inProgressAddTask} onClickInProgressItem={this.onClickInProgressItem} />
                    ))}
                </>         
            );
    }
}

export default InProgressInputButton;