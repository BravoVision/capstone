import React, { Component } from "react";
import {
  Button,
  Container,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardText
} from "reactstrap";
import { NavLink } from "react-router-dom";

class TaskShow extends Component {
  handleSubmit = () => {
    this.props.deleteTask(this.props.task.id);
  };

  render() {
    let { task } = this.props;

    return (
      <>
        <Container>
          <Card className="showCard">
            <CardHeader className="showTitle">{task?.title}</CardHeader>
            <CardBody>
              <CardText className="showDetails">{task?.details}</CardText>
            </CardBody>
            <CardFooter className="showFooter">
              <NavLink to="/task_index">
                <Button className="goBackButton">Go Back</Button>
              </NavLink>{" "}
              <NavLink to={`/task_edit/${task.id}`}>
                <Button className="updateButton">Update Task</Button>
              </NavLink>{" "}
              <NavLink to={task && "/task_index"}>
                <Button
                  name="delete"
                  onClick={this.handleSubmit}
                  className="deleteButton"
                >
                  Delete Task
                </Button>
              </NavLink>
            </CardFooter>
          </Card>
     
        </Container>
      </>
    );
  }
}

export default TaskShow;
