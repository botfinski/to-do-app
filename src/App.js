import React, { Component } from "react";
import "./App.scss";
import Top from "./components/Top/Top";
import TaskList from "./components/TaskList/TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        content: "Short note"
      },
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta lectus et odio malesuada consectetur. Etiam quis ultricies nunc. Suspendisse vel ante turpis. Suspendisse scelerisque metus id leo lacinia, sed pretium nunc semper. Aliquam leo mauris, mattis vitae auctor ac, sodales ut dui."
      },
      {
        id: 2,
        content: "Another note"
      }
    ],
    newTask: {
      id: null,
      content: ""
    },
    inputValid: true
  };

  componentDidMount() {
    let localStorageTasks = localStorage.getItem("tasks");

    if (localStorageTasks) {
      this.populateTasks(localStorageTasks);
    } else {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  populateTasks = this.populateTasks.bind(this);
  populateTasks(tasks) {
    this.setState({ tasks: JSON.parse(tasks) });
  }

  handleDelete = this.handleDelete.bind(this);
  handleDelete(e) {
    let id = e.target.dataset.id;
    let updatedTasks = this.state.tasks;

    updatedTasks.splice(id, 1);
    updatedTasks.map((task, index) => {
      return (task.id = index);
    });

    this.setState({ tasks: updatedTasks });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  handleSubmit = this.handleSubmit.bind(this);
  handleSubmit(e) {
    e.preventDefault();

    let updatedTasks = this.state.tasks;
    let updatedNewTask = { ...this.state.newTask };

    if (this.state.newTask.content) {
      updatedTasks.push(this.state.newTask);
      updatedNewTask.content = "";
    }

    this.setState({ tasks: updatedTasks, newTask: updatedNewTask });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  handleType = this.handleType.bind(this);
  handleType(e) {
    let updatedNewTask = { ...this.state.newTask };
    let updatedValid = this.state.valid;

    updatedNewTask.id = this.state.tasks.length;
    updatedNewTask.content = e.target.value;

    this.setState({ newTask: updatedNewTask, valid: updatedValid });
  }

  render() {
    return (
      <div className="App">
        <Top
          typed={this.handleType}
          submitted={this.handleSubmit}
          disabled={this.state.newTask.content ? "" : "disabled"}
          value={this.state.newTask.content}
          valid={this.state.valid}
          charCount={this.state.charCount}
        />
        <TaskList tasks={this.state.tasks} deleteClicked={this.handleDelete} />
      </div>
    );
  }
}

export default App;
