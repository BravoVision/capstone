import React from "react"
import Home from "./pages/Home"
import TaskIndex from "./pages/TaskIndex"
import TaskShow from "./pages/TaskShow"
import TaskNew from "./pages/TaskNew"
import TaskEdit from "./pages/TaskEdit"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    this.readTask()
  }

  readTask = () => {
    fetch("/tasks")
      .then(response => response.json())
      .then(taskArray => this.setState({ tasks: taskArray }))
      .catch(errors => console.log("Task read errors:", errors))
  }


  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...this.props} />} />
          
          {logged_in &&
            <Route
              path="/task_index"
              render={(props) => <TaskIndex tasks={this.state.tasks} />} />
          }

          {logged_in &&
            <Route
              path="/task_show/:id"
              render={(props) => {
                let id = props.match.params.id
                let task = this.state.tasks.find(taskObject => taskObject.id === +id)
                return <TaskShow task={task} />
              }}
            />
          }

          {logged_in &&
            <Route path="/task_new" component={TaskNew} />
          }

          {logged_in &&
            <Route path="/task_edit" component={TaskEdit} />
          }

          
          <Route 
            path="/about_us" 
            component={AboutUs}/>
          
          <Route render={(props) => <NotFound {...props} logged_in={logged_in} />} />
        </Switch>
        <Footer {...this.props} />
      </Router>
    );
  }
}

export default App
