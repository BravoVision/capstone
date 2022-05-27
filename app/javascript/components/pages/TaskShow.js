import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container } from 'reactstrap'
import TaskIndex from './TaskIndex';

class TaskShow extends Component {
    render() {
        
        let { task } = this.props

        return (
            <>
                <Container>
                    <h1>TaskShow</h1>
                    <h3>Title:  {task && task.title}</h3>
                    <h3>Details: {task && task.details}</h3>
                    
                    <a href="/task_index" >
                    <Button
                        color="primary"
                    >
                        Go Back
                    </Button>
                    </a>
                    {' '}
                    <Button
                        color="warning"
                    >
                        Update Task
                    </Button>
                    {' '}
                    <Button
                        color="danger"
                    >
                        Delete Task
                    </Button>
                </Container>
            </>
        );
    }
}

export default TaskShow;