import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";


class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          errors:{},
          updateTask: {
            title: "",
            details: "",
            user_id: this.props.current_user.id
          },
          submitted: false,
        };
      }
    
      handleInput = (a) => {
        const { updateTask } = this.state;
        updateTask[a.target.name] = a.target.value;
        this.setState({ updateTask: updateTask });
      };
    
      handleSubmit = () => {
        this.props.updateTask(this.state.updateTask, this.props.task.id)
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
              <h1>Task Update</h1>
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
                Submit Task Updates
              </Button>
            </Container>
            {this.state.submitted && <Redirect to={`/task_show/${this.props.task.id}`}/>}
          </>
        );
      }
    }

export default TaskEdit;