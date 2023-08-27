import React from 'react';
import ReadyListItem from '../ready-list-item/ready-list-item';

class ReadyInputButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {enterTask: false};
    }
    onClickReadyAddCard = () => {
        this.setState({ enterTask: true });
      };
    onClickReadyItem = () => {
        this.setState({ enterTask: false });
    };
    render() {
        const { enterTask } = this.state;
        const { data } = this.props;
        const { readyAddTask } = this.props;
        const { isBacklogNotEmpty } = this.props;
        if (!enterTask)
            if (isBacklogNotEmpty)
                return (
                    <>
                        <button className="ready-button-add" onClick={this.onClickReadyAddCard}>+ Add card</button> 
                    </>         
                )
            else 
                return (
                    <>
                        <button className="ready-button-add-dis" onClick={this.onClickReadyAddCard} disabled>+ Add card</button> 
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
                    task.list === 'backlog' && <ReadyListItem name={ task.name } id={ task.id } readyAddTask={readyAddTask} onClickReadyItem={this.onClickReadyItem} />
                ))}
            </>         
        );
    }
}

export default ReadyInputButton;