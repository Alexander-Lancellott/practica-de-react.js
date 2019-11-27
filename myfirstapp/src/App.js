import React, { Component } from "react";
import logo from "./logo.svg";
import logo2 from "./logo2.svg";
import "./App.css";

import { todos } from "./todos.json";

import TodoForm from "./components/TodoForm.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }
  removeTodo(index) {
    if (window.confirm("Are you sure want to delete it?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        })
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 text-center" key={i}>
          <div className="card mt-4">
            <div className="card-title">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsible}</mark>
              </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <p className="text-white h4">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </p>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo2} className="App-logo2" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
