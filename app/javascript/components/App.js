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
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component {
  render () {



    
    return (
      <Router>
      <Header {...this.props} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/task_index" component={TaskIndex} />
        <Route path="/task_show" component={TaskShow} />
        <Route path="/task_new" component={TaskNew} />
        <Route path="/task_edit" component={TaskEdit} />
        <Route path="/about_us" component={AboutUs} />
        <Route component={NotFound}/>
      </Switch>
      <Footer {...this.props} />
      </Router>
    );
  }
}

export default App
