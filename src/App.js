import React from 'react'
import './App.css';

import ReactRouter from './components/routing/react-router';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  const dataMock = [
    {
      title: 'backlog',
      issues: [
        {
          id: '1',
          name: 'Task 1',
          description: 'Task 1 description'
        },
        {
          id: '2',
          name: 'Task 2',
          description: 'Task 2 description'
        },
        {
          id: '3',
          name: 'Task 3',
          description: 'Task 3 description'
        }, 
        {
          id: '4',
          name: 'Task 4',
          description: 'Task 4 description'
        } 
      ]
    },
    {
      title: 'ready',
      issues: [
        {
          id: '5',
          name: 'Task 5',
          description: 'Task 5 description'
        },
        {
          id: '6',
          name: 'Task 6',
          description: 'Task 6 description'
        },
        {
          id: '7',
          name: 'Task 7',
          description: 'Task 7 description'
        },  
      ]
    }
  ]
  return (
    <>
      <Header />
      <ReactRouter data={dataMock}/>
      <Footer />
    </>
  );
}

export default App;
