import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
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
      <div>
        <Container className="center-form">
          <Col xs="8" sm="8" md="6" lg="6" xl="6">
          <h1>Enter New Task</h1>
          <br />
          <Form>
            <FormGroup>
              <Label for="title" className="formLabel">Title</Label>
              <Input type="text" name="title" onChange={this.handleInput} />
              {this.state.errors.title && <div className="errorDisplay">{this.state.errors.title[0]}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="details" className="formLabel">Details</Label>
              <Input
                type="textarea"
                name="details"
                onChange={this.handleInput}
              />
              {this.state.errors.details && <div className="errorDisplay">{this.state.errors.details[0]}</div>}
            </FormGroup>

            <Button onClick={this.handleSubmit} className="button submitButton" >
            Submit New Task
          </Button>   
          </Form>
          </Col>
        </Container>
        </div>
        {this.state.submitted && <Redirect to="/task_index" />}
      </>
    );
  }
}

export default TaskNew;
