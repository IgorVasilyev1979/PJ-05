import React from 'react'
import './App.css';

import ReactRouter from './components/routing/react-router';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends React.Component {

  #isBacklogNotEmpty = false;
  #isReadyNotEmpty = false;
  #isInProgressNotEmpty = false;

  ChangeEmptyFlags = (tasks) => {
    this.#isBacklogNotEmpty = tasks.some((task) => task.list === 'backlog');
    this.#isReadyNotEmpty = tasks.some((task) => task.list === 'ready');
    this.#isInProgressNotEmpty = tasks.some((task) => task.list === 'in-progress');
  }

  constructor(props) {
      super(props);
      if(localStorage.app_data === undefined) {
        this.state = {tasks: []}; 
        this.ChangeEmptyFlags(this.state.tasks);
      }
      else {
        this.state = {tasks: JSON.parse( localStorage.app_data )}; 
        this.ChangeEmptyFlags(this.state.tasks);
      }
      this.AddTask = this.AddTask.bind(this);
      this.ReadyAddTask = this.ReadyAddTask.bind(this);
  }

  AddTask = (arg_name) => {
    this.setState((prevState, prevProps) => {
      const tasks = [...prevState.tasks];
      tasks.push({id: (tasks.length+1).toString(), name: arg_name, description: 'This task has no description', list: 'backlog'});
      localStorage.setItem('app_data', JSON.stringify(tasks));
      this.ChangeEmptyFlags(tasks);
      return {
        tasks,
      };
    });
  }

  ReadyAddTask = (arg_id) => {
    this.setState((prevState, prevProps) => {
      const tasks = [...prevState.tasks];
      tasks[arg_id-1].list = 'ready';
      localStorage.setItem('app_data', JSON.stringify(tasks));
      this.ChangeEmptyFlags(tasks);
      return {
        tasks,
      };
    });
  }

  InProgressAddTask = (arg_id) => {
    this.setState((prevState, prevProps) => {
      const tasks = [...prevState.tasks];
      tasks[arg_id-1].list = 'in-progress';
      localStorage.setItem('app_data', JSON.stringify(tasks));
      this.ChangeEmptyFlags(tasks);
      return {
        tasks,
      };
    });
  }

  FinishedAddTask = (arg_id) => {
    this.setState((prevState, prevProps) => {
      const tasks = [...prevState.tasks];
      tasks[arg_id-1].list = 'finished';
      localStorage.setItem('app_data', JSON.stringify(tasks));
      this.ChangeEmptyFlags(tasks);
      return {
        tasks,
      };
    });
  }

  render() {
      const { tasks } = this.state;
      return (
        <>
        <Header />
        <ReactRouter data={tasks} addTask={this.AddTask} readyAddTask={this.ReadyAddTask} inProgressAddTask={this.InProgressAddTask} finishedAddTask={this.FinishedAddTask} isBacklogNotEmpty={this.#isBacklogNotEmpty} isReadyNotEmpty={this.#isReadyNotEmpty} isInProgressNotEmpty={this.#isInProgressNotEmpty} />
        <Footer data={tasks} />
        </>         
      );
  }
}

export default App;
