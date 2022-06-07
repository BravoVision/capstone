import React, { Component } from "react";
import { Row, Col, CardTitle, Card, Container, Button, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";

class TaskIndex extends Component {
  render() {
    return (
      <>
        <Container className="task-index text-center" >
          <br />
          <br />
          <h1 className="taskTitle">Your Personal Task List</h1>
          <br />
          <br />
          <NavLink to="/task_new">
            <Button className="button createButton">Add Task</Button>
          </NavLink>
          <br />
          <div className="task-index">
          {this.props.tasks?.map((task) => {
            return (
              <Row key={task.id}>
                {/* <Col xs="8" sm="8" md="6" lg="6" xl="6"> */}
                  <Card body >
                    <CardTitle>
                      <NavLink to={`/task_show/${task.id}`}>
                        <h4 className="listTitle">{task.title}</h4>
                      </NavLink>
                    </CardTitle>
                  </Card>
                {/* </Col> */}
              </Row>
            );
          })}
           </div>
        </Container>
      </>
    );
  }
}

export default TaskIndex;
