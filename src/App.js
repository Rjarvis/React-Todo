import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import "./components/TodoComponents/Todo.css";

const todo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todo
    };
  }

  addTask = (e, taskName) => {
    e.preventDefault();
    const existing = this.state.todo.filter(
      task => task.name === taskName
    );
    if (existing.length === 0){
      const newTask = {
        name: taskName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todo: [...this.state.todo, newTask]
      });
      console.log(todo);
    }
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    });
  };

  toggleItem = taskId => {
    console.log("index.js: App: toggleItem: ", taskId);
    console.log("index.js: App: this.state: ", this.state);
    this.setState({
      todo: this.state.todo.map(task => {
        if(task.id === taskId){
          return {...task, completed: !task.completed};
        }
          return task;
      })
    });
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("rendering...");
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addTask}/>
        </div>
        <TodoList
          todo = {this.state.todo}
          toggleItem = {this.toggleItem}
          clearCompleted = {this.clearCompleted}  
        />
      </div>
    );
  }
}

export default App;
