import React from "react";
import Home from "./pages/Home";
import TaskIndex from "./pages/TaskIndex";
import TaskShow from "./pages/TaskShow";
import TaskNew from "./pages/TaskNew";
import TaskEdit from "./pages/TaskEdit";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.readTask();
  }

  readTask = () => {
    fetch("/tasks")
      .then((response) => response.json())
      .then((taskArray) => this.setState({ tasks: taskArray }))
      .catch((errors) => console.log("Task read errors:", errors));
  }

  createTask = (newlyCreatedTask) => {
    return fetch("/tasks", {
      body: JSON.stringify(newlyCreatedTask),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        this.readTask()
        return response.json()
      })
      .catch((errors) => errors);
  }
  
  updateTask = (newlyUpdatedTask, id) => {
    return fetch(`/tasks/${id}`, {
      body: JSON.stringify(newlyUpdatedTask),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      this.readTask()
      return response.json()
    })
    .catch(errors => console.log("Task update errors:", errors))
  }

  deleteTask = (id) => {
    fetch(`/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readTask())
    .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <Router>
        <div className="appBody">
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...this.props} />} />

          {logged_in && (
            <Route
              path="/task_index"
              render={(props) => <TaskIndex tasks={this.state.tasks} />}
            />
          )}

          {logged_in && (
            <Route
              path="/task_show/:id"
              render={(props) => {
                let id = props.match.params.id;
                let task = this.state.tasks.find(
                  (taskObject) => taskObject.id === +id
                );
                return <TaskShow task={task} deleteTask={this.deleteTask}/>;
              }}
            />
          )}

          {logged_in && (
            <Route
              path="/task_new"
              render={() => (
                <TaskNew
                  current_user={current_user}
                  createTask={this.createTask}
                />
              )}
            />
          )}

          {logged_in && (
            <Route
              path="/task_edit/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let task = this.state.tasks.find(
                  taskObject => taskObject.id === id
                );
                return (
                  <TaskEdit
                    task={task}
                    updateTask={this.updateTask}
                    current_user={current_user}
                  />
                );
              }}
            />
          )}

          <Route path="/about_us" component={AboutUs} />

          <Route
            render={(props) => <NotFound {...props} logged_in={logged_in} />}
          />
        </Switch>
        <Footer {...this.props} />
        </div>

      </Router>
    );
  }
}

export default App;
