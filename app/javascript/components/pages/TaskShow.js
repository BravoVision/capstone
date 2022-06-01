import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class TaskShow extends Component {

    handleSubmit = () => {
        this.props.deleteTask(this.props.task.id)
      }

    render() {

        let { task } = this.props

        return (
            <>
                <Container>
                    <h1>TaskShow</h1>
                    <h3>Title:  {task?.title}</h3>
                    <h3>Details: {task?.details}</h3>

                    <NavLink to="/task_index">
                        <Button color="primary">
                            Go Back
                        </Button>
                    </NavLink>
                    {' '}
                    <NavLink to={`/task_edit/${task.id}`}>
                        <Button color="warning">
                            Update Task
                        </Button>
                    </NavLink>
                    {' '}
                    <NavLink to={task && "/task_index"}>
                            <Button name="delete" 
                                    onClick={this.handleSubmit} 
                                    color="danger">
                                        Delete Task
                            </Button>
                    </NavLink>
                </Container>
            </>
        );
    }
}

export default TaskShow;