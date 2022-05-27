import React, { Component } from 'react';
import { Row, Col, CardTitle, Card, Container, Button, Nav } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class TaskIndex extends Component {

    render() {
        return (
            <>
                <Container>
                    <h1>Task Index</h1>
                    <br />
                    <NavLink to="/task_new">
                        <Button color="primary">
                            Create New Task
                        </Button>
                    </NavLink>
                    <br />

                    {this.props.tasks?.map(task => {
                        return (
                            <Row key={task.id}>
                                <Col md="6">
                                    <Card body>
                                        <CardTitle>
                                            <NavLink to={`/task_show/${task.id}`} >
                                                <h4>{task.title}</h4>
                                            </NavLink>
                                        </CardTitle>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    })}
                </Container>
            </>
        );
    }
}

export default TaskIndex;