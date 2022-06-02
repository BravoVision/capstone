import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class TaskNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors:{},
      newTask: {
        title: "",
        details: "",
        user_id: this.props.current_user.id
      },
      submitted: false,
    };
  }

  handleInput = (a) => {
    const { newTask } = this.state;
    newTask[a.target.name] = a.target.value;
    this.setState({ newTask: newTask });
  };

  handleSubmit = () => {
    this.props.createTask(this.state.newTask)
        .then((results) => {
          if (results.task){
           this.setState({ submitted: true }) 
          } else {
           this.setState({errors: results.errors}) 
          }     
        })
  };

  render() {
    return (
      <>
        <Container>
          <h1>TaskNew</h1>
          <Form>
            <FormGroup>
              <Label for="name">Title</Label>
              <Input type="text" name="title" onChange={this.handleInput} />
              {this.state.errors.title && <div>{this.state.errors.title[0]}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="age">Details</Label>
              <Input
                type="textarea"
                name="details"
                onChange={this.handleInput}
              />
              {this.state.errors.details && <div>{this.state.errors.details[0]}</div>}
            </FormGroup>
          </Form>
          <Button onClick={this.handleSubmit} name="submit">
            Submit New Task
          </Button>
        </Container>
        {this.state.submitted && <Redirect to="/task_index" />}
      </>
    );
  }
}

export default TaskNew;
